import nse4Questions from './questions.js';

class QuizEngine {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedOption = null;
        this.isAnswered = false;

        // Elements
        this.startScreen = document.getElementById('start-screen');
        this.questionScreen = document.getElementById('question-screen');
        this.resultScreen = document.getElementById('result-screen');
        this.progressContainer = document.getElementById('progress-container');
        
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.explanationContainer = document.getElementById('explanation-container');
        this.explanationText = document.getElementById('explanation-text');
        this.nextBtn = document.getElementById('next-btn');
        
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.scoreText = document.getElementById('score-text');
        
        this.init();
    }

    init() {
        document.getElementById('start-btn-25').onclick = () => this.startQuiz(25);
        this.nextBtn.onclick = () => this.handleNext();
    }

    startQuiz(count) {
        // Shuffle and slice
        this.questions = [...nse4Questions]
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.min(count, nse4Questions.length));
        
        this.currentQuestionIndex = 0;
        this.score = 0;
        
        this.startScreen.classList.add('hide');
        this.questionScreen.classList.remove('hide');
        this.progressContainer.classList.remove('hide');
        
        this.renderQuestion();
    }

    renderQuestion() {
        const q = this.questions[this.currentQuestionIndex];
        this.isAnswered = false;
        this.selectedOption = null;
        
        this.questionText.textContent = q.question;
        this.optionsContainer.innerHTML = '';
        this.explanationContainer.classList.add('hide');
        this.nextBtn.disabled = true;

        q.options.forEach((opt, index) => {
            const div = document.createElement('div');
            div.className = 'option-card';
            div.textContent = opt;
            div.onclick = () => this.handleOptionSelect(index, div);
            this.optionsContainer.appendChild(div);
        });

        this.updateProgress();
    }

    handleOptionSelect(index, element) {
        if (this.isAnswered) return;

        const allOptions = this.optionsContainer.querySelectorAll('.option-card');
        allOptions.forEach(opt => opt.classList.remove('selected'));
        
        element.classList.add('selected');
        this.selectedOption = index;
        
        // Auto-check answer after selection
        this.checkAnswer();
    }

    checkAnswer() {
        this.isAnswered = true;
        const q = this.questions[this.currentQuestionIndex];
        const allOptions = this.optionsContainer.querySelectorAll('.option-card');
        
        if (this.selectedOption === q.correct) {
            this.score++;
            allOptions[this.selectedOption].classList.add('correct');
        } else {
            allOptions[this.selectedOption].classList.add('incorrect');
            allOptions[q.correct].classList.add('correct');
        }

        this.explanationText.textContent = q.explanation;
        this.explanationContainer.classList.remove('hide');
        this.nextBtn.disabled = false;
        this.updateScoreDisplay();
    }

    updateProgress() {
        const current = this.currentQuestionIndex + 1;
        const total = this.questions.length;
        const percent = (current / total) * 100;
        
        this.progressFill.style.width = `${percent}%`;
        this.progressText.textContent = `Question ${current} of ${total}`;
    }

    updateScoreDisplay() {
        const percent = Math.round((this.score / (this.currentQuestionIndex + 1)) * 100);
        this.scoreText.textContent = `Score: ${percent}%`;
    }

    handleNext() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.questionScreen.classList.add('hide');
        this.progressContainer.classList.add('hide');
        this.resultScreen.classList.remove('hide');
        
        const finalPercent = Math.round((this.score / this.questions.length) * 100);
        document.getElementById('final-score').textContent = `${finalPercent}%`;
        
        const msg = document.getElementById('result-message');
        if (finalPercent >= 70) {
            msg.textContent = "Congratulations! You passed the mock test.";
            msg.style.color = "var(--success)";
        } else {
            msg.textContent = "Keep studying! You need at least 70% to pass.";
            msg.style.color = "var(--danger)";
        }
    }
}

// Start Engine
new QuizEngine();
