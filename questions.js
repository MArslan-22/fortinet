const nse4Questions = [
    {
        question: "Which feature must be enabled on a FortiGate to allow traffic from one VLAN to another?",
        options: [
            "Inter-VLAN Routing",
            "VLAN Trunking",
            "Policy-based Routing",
            "Intra-VLAN Pass-through"
        ],
        correct: 0,
        explanation: "To allow traffic between different VLANs, the FortiGate must perform Inter-VLAN routing, which involves creating sub-interfaces for each VLAN on a physical port."
    },
    {
        question: "A firewall policy is configured to block 'Social Media'. However, users can still access Facebook via HTTPS. What is the most likely cause?",
        options: [
            "Application Control is not enabled in the policy.",
            "DNS filtering is missing.",
            "SSL Inspection is set to 'no-inspection' or 'certificate-inspection' instead of 'deep-inspection'.",
            "The policy order is incorrect."
        ],
        correct: 2,
        explanation: "Modern sites use encrypted HTTPS. Without Deep SSL Inspection, the FortiGate cannot see the application-layer headers needed to identify and block specific social media traffic."
    },
    {
        question: "When configuring a Site-to-Site IPsec VPN, which phase defines the 'Proposal' containing the encryption and authentication algorithms?",
        options: [
            "Phase 1",
            "Phase 2",
            "Phase 3",
            "Security Association (SA) Tunnel"
        ],
        correct: 0,
        explanation: "Phase 1 is where the IKE exchange occurs and the encryption/authentication proposals for the secure channel itself are negotiated."
    },
    {
        question: "In FortiOS 7.6, which SD-WAN feature is used to ensure traffic follows the highest quality link based on Latency, Jitter, and Packet Loss?",
        options: [
            "SLA Targets",
            "Dynamic Routing Profiles",
            "Performance SLA",
            "Traffic Shaper Profiles"
        ],
        correct: 2,
        explanation: "Performance SLAs in SD-WAN monitor link health and use those metrics to make routing decisions based on quality targets."
    },
    {
        question: "Which command in the CLI would you use to see real-time packets matching a specific policy?",
        options: [
            "get system session list",
            "diagnose debug flow filter addr",
            "diagnose sniffer packet any",
            "show firewall policy"
        ],
        correct: 1,
        explanation: "The 'diagnose debug flow' command is the standard way to trace how the FortiGate handles specific packets in real-time."
    },
    {
        question: "Which of the following is required for a FortiGate to participate in the Fortinet Security Fabric?",
        options: [
            "A valid FortiGuard account",
            "A FortiAnalyzer device",
            "FortiGate must have a valid license and be in 'Standalone' mode",
            "At least two WAN interfaces"
        ],
        correct: 1,
        explanation: "While a FortiGate can stand alone, a FortiAnalyzer (or FortiManager) is essentially the central logging and management requirement for a fully functioning Security Fabric."
    },
    {
        question: "How does a FortiGate handle traffic if no matching firewall policy is found?",
        options: [
            "It drops the traffic silently.",
            "It triggers the 'Implicit Deny' policy and drops the traffic.",
            "It allows the traffic by default but logs it.",
            "It redirects the user to a portal page."
        ],
        correct: 1,
        explanation: "FortiGate uses a 'Zero Trust' approach by default; if no policy matches, the Implicit Deny policy at the bottom of the list drops the traffic."
    }
];

export default nse4Questions;
