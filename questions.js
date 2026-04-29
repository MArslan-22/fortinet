const nse4Questions = [
    {
        question: "Review the IKE debug output for IPsec: 'ike 0:Remote_1:10: sent IKE msg (R-U-THERE-ACK) ... ike 0:Remote_1: link is idle 2 ... dpd=1'. Which one of the following statements is correct regarding this output?",
        options: ["The output is a Phase 1 negotiation.", "The output is a Phase 2 negotiation.", "The output captures the Dead Peer Detection messages.", "The output captures the Dead Gateway Detection packets."],
        correct: 2,
        explanation: "The 'R-U-THERE' and 'R-U-THERE-ACK' messages, along with the 'dpd=1' flag, indicate that Dead Peer Detection (DPD) is active."
    },
    {
        question: "Which feature must be enabled on a FortiGate to allow traffic from one VLAN to another?",
        options: ["Inter-VLAN Routing", "VLAN Trunking", "Policy-based Routing", "Intra-VLAN Pass-through"],
        correct: 0,
        explanation: "FortiGate must perform Inter-VLAN routing, usually via sub-interfaces."
    },
    {
        question: "A firewall policy blocks 'Social Media', but users access Facebook via HTTPS. Cause?",
        options: ["App Control not enabled.", "DNS filtering missing.", "SSL Inspection is not set to 'deep-inspection'.", "Policy order incorrect."],
        correct: 2,
        explanation: "Without Deep SSL Inspection, FortiGate cannot see application-layer headers in encrypted traffic."
    },
    {
        question: "Which phase in Site-to-Site IPsec VPN defines the 'Proposal' for encryption/authentication algorithms?",
        options: ["Phase 1", "Phase 2", "Phase 3", "Security Association (SA)"],
        correct: 0,
        explanation: "Phase 1 is where the IKE exchange and encryption proposals for the secure channel are negotiated."
    },
    {
        question: "In FortiOS 7.6, which SD-WAN feature ensures traffic follows the highest quality link based on Latency, Jitter, and Packet Loss?",
        options: ["SLA Targets", "Dynamic Routing Profiles", "Performance SLA", "Traffic Shaper Profiles"],
        correct: 2,
        explanation: "Performance SLAs monitor link health and use metrics for routing decisions."
    },
    {
        question: "CLI command to see real-time packets matching a specific policy?",
        options: ["get system session list", "diagnose debug flow filter addr", "diagnose sniffer packet any", "show firewall policy"],
        correct: 1,
        explanation: "'diagnose debug flow' traces how FortiGate handles specific packets."
    },
    {
        question: "Requirement for FortiGate to participate in the Fortinet Security Fabric?",
        options: ["Valid FortiGuard account", "FortiAnalyzer device", "Standalone mode", "Two WAN interfaces"],
        correct: 1,
        explanation: "FortiAnalyzer (or FortiManager) is required for central logging and fabric functionality."
    },
    {
        question: "How does FortiGate handle traffic if no matching firewall policy is found?",
        options: ["Drops silently.", "Triggers 'Implicit Deny' and drops.", "Allows by default.", "Redirects to portal."],
        correct: 1,
        explanation: "The Implicit Deny policy at the bottom drops any unmatched traffic."
    },
    {
        question: "Session state indicating TCP handshake is complete?",
        options: ["SYN_SENT", "ESTABLISHED", "TIME_WAIT", "CLOSE_WAIT"],
        correct: 1,
        explanation: "ESTABLISHED means the three-way handshake is finished."
    },
    {
        question: "Purpose of 'Pre-shared Key' in IPsec VPN?",
        options: ["Encrypt data payload.", "Authenticate VPN peers during Phase 1.", "Generate Phase 2 keys.", "Define interesting traffic."],
        correct: 1,
        explanation: "PSK is used to authenticate peers during IKE negotiation."
    },
    {
        question: "Which VDOM handles system-wide tasks like FortiGuard updates by default?",
        options: ["Root VDOM", "Management VDOM", "Global VDOM", "Primary VDOM"],
        correct: 1,
        explanation: "The Management VDOM handles system-level management traffic."
    },
    {
        question: "Requirement for FortiGate HA in Active-Passive mode?",
        options: ["Different hardware models.", "Identical firmware versions.", "Different IP addresses.", "VDOMs disabled."],
        correct: 1,
        explanation: "HA members must have identical firmware, hardware, and licenses."
    },
    {
        question: "Why install FortiGate CA certificate on user browsers for 'Deep Inspection'?",
        options: ["Enable hardware acceleration.", "Prevent 'Untrusted Certificate' warnings.", "Bypass encryption.", "Sync clock."],
        correct: 1,
        explanation: "Since FortiGate re-signs certificates, browsers must trust its CA to avoid warnings."
    },
    {
        question: "Inspection mode supporting 'Proxy-based' antivirus?",
        options: ["Flow-based", "Proxy-based", "Asynchronous", "Stateful"],
        correct: 1,
        explanation: "Proxy-based inspection buffers files for thorough analysis."
    },
    {
        question: "What does 'Weight' in a static route determine?",
        options: ["Priority for same AD.", "Physical bandwidth.", "OSPF cost.", "Path selection for same distance."],
        correct: 0,
        explanation: "Priority (Weight) selects the active route when AD is identical."
    },
    {
        question: "Service providing real-time updates to block malicious URLs?",
        options: ["Antivirus", "Web Filtering", "IPS", "Application Control"],
        correct: 1,
        explanation: "Web Filtering uses FortiGuard database to categorize URLs."
    },
    {
        question: "Function of 'Full SSL Inspection'?",
        options: ["Inspect certificate header only.", "Decrypt and inspect HTTPS payload content.", "Block all SSL.", "Speed up SSL."],
        correct: 1,
        explanation: "Full inspection decrypts traffic for deep scanning."
    },
    {
        question: "Not a valid SD-WAN Load Balancing algorithm?",
        options: ["Source IP", "Spillover", "Volume", "Destination Port"],
        correct: 3,
        explanation: "Destination Port is not a standalone SD-WAN algorithm."
    },
    {
        question: "Benefit of Application Control over port-based policies?",
        options: ["Faster processing.", "Identify apps on non-standard ports.", "No SSL inspection needed.", "Only for web traffic."],
        correct: 1,
        explanation: "App Control uses signatures to identify behavior regardless of ports."
    },
    {
        question: "FortiGate HA 'Heartbeat' interface use?",
        options: ["Route user traffic.", "Sync config and session tables.", "Connect to FortiAnalyzer.", "Provide internet to passive unit."],
        correct: 1,
        explanation: "Heartbeat is for cluster communication and sync."
    },
    {
        question: "CLI command for FortiGuard connectivity status?",
        options: ["get system status", "diagnose debug rating", "diagnose fortiguard port-info", "get system fortiguard-service status"],
        correct: 1,
        explanation: "'diagnose debug rating' checks communication with rating servers."
    },
    {
        question: "NAT type for multiple internal users sharing one public IP?",
        options: ["Static NAT", "One-to-One NAT", "Source NAT (PAT)", "Destination NAT"],
        correct: 2,
        explanation: "Source NAT with PAT allows IP sharing."
    },
    {
        question: "What is 'Implicit Deny'?",
        options: ["Manual policy at top.", "Hidden policy at bottom dropping unmatched traffic.", "Default allow policy.", "VPN only policy."],
        correct: 1,
        explanation: "Policy ID 0 denies any traffic not permitted by higher policies."
    },
    {
        question: "Perfect Forward Secrecy (PFS) in IPsec provides?",
        options: ["Faster encryption.", "Key compromise protection.", "Auto IP assignment.", "Backup tunnel."],
        correct: 1,
        explanation: "PFS ensures Phase 2 keys are not derived from Phase 1 keys."
    },
    {
        question: "What is a 'Virtual Wire Pair'?",
        options: ["Logical link between VDOMs.", "Two physical interfaces acting as transparent bridge.", "Redundant SD-WAN link.", "VPN type."],
        correct: 1,
        explanation: "Transparent bridge passing traffic without routing."
    },
    {
        question: "SD-WAN 'Health Check' purpose?",
        options: ["Scan for viruses.", "Monitor link availability and performance.", "Update firmware.", "Admin login check."],
        correct: 1,
        explanation: "Tests path health for link selection."
    },
    {
        question: "Debug flow 'policy-0 is used' meaning?",
        options: ["Matched first policy.", "Dropped by Implicit Deny.", "Allowed by management.", "Part of VPN."],
        correct: 1,
        explanation: "Policy 0 is the Implicit Deny policy."
    },
    {
        question: "Firewall Policy Match criteria?",
        options: ["Source/Destination Address", "Service", "Schedule", "All of the above"],
        correct: 3,
        explanation: "Policies match based on address, service, schedule, and user."
    },
    {
        question: "Difference between Static and Dynamic IPS signatures?",
        options: ["Static never changes.", "Dynamic updated via FortiGuard.", "No difference.", "Static only for web."],
        correct: 1,
        explanation: "FortiGuard provides dynamic signature updates."
    },
    {
        question: "Dead Peer Detection (DPD) in IPsec?",
        options: ["Compress data.", "Detect remote gateway responsiveness.", "Encrypt password.", "Assign client IP."],
        correct: 1,
        explanation: "Monitors peer health to manage tunnel state."
    },
    {
        question: "VDOM mode for multiple independent firewall instances?",
        options: ["Split-task", "Multi-VDOM", "Single-VDOM", "Global-VDOM"],
        correct: 1,
        explanation: "Multi-VDOM creates logical firewall units."
    },
    {
        question: "Split Tunneling in Dial-up VPN?",
        options: ["Two tunnels for speed.", "Only corporate traffic via VPN, others local.", "Two passwords.", "Bypass firewall."],
        correct: 1,
        explanation: "Allows local internet access alongside VPN."
    },
    {
        question: "Benefit of FortiGate Cloud logging?",
        options: ["Faster FortiGate.", "Off-site storage and reporting without local analyzer.", "No policies needed.", "Mandatory."],
        correct: 1,
        explanation: "Cloud-based log storage and analysis."
    },
    {
        question: "Reverse Path Forwarding (RPF) check prevents?",
        options: ["Slow routing.", "IP Spoofing.", "DNS leaks.", "VPN disconnects."],
        correct: 1,
        explanation: "Ensures incoming traffic is from a reachable source."
    },
    {
        question: "VIP (Virtual IP) purpose?",
        options: ["Special privileges.", "Destination NAT (Port Forwarding).", "Virtual interface.", "GUI speed."],
        correct: 1,
        explanation: "Maps external IP/port to internal server."
    },
    {
        question: "Log level with most detail?",
        options: ["Information", "Warning", "Debug", "Critical"],
        correct: 2,
        explanation: "Debug level provides deepest troubleshooting data."
    },
    {
        question: "HA 'Failover' event result?",
        options: ["Cluster shutdown.", "Passive unit takes over as primary.", "All sessions dropped.", "Manual cable switch."],
        correct: 1,
        explanation: "Secondary unit assumes primary role seamlessly."
    },
    {
        question: "Quarantine feature function?",
        options: ["Delete malicious files.", "Isolate suspicious host/file.", "Reboot.", "Email user."],
        correct: 1,
        explanation: "Blocks or holds threats to prevent spread."
    },
    {
        question: "Not a valid firewall policy action?",
        options: ["ACCEPT", "DENY", "LEARN", "FORWARD"],
        correct: 3,
        explanation: "Standard actions are ACCEPT, DENY, and LEARN."
    },
    {
        question: "Certificate Inspection vs Deep Inspection?",
        options: ["No CA needed.", "SNI/Header only, no payload decryption.", "More secure.", "A and B."],
        correct: 3,
        explanation: "Doesn't decrypt, so no CA warning, but less visibility."
    },
    {
        question: "What is FortiLink?",
        options: ["FortiGate-FortiSwitch protocol.", "VPN type.", "Support portal.", "Mobile app."],
        correct: 0,
        explanation: "Management protocol for FortiSwitches."
    },
    {
        question: "Static Route default Administrative Distance?",
        options: ["1", "5", "10", "110"],
        correct: 0,
        explanation: "Static routes default to AD 1."
    },
    {
        question: "Tool for real-time bandwidth visualization?",
        options: ["FortiView", "CLI 'show'", "Static Reports", "Event Logs"],
        correct: 0,
        explanation: "Interactive dashboard for network visibility."
    },
    {
        question: "Traffic Shaping use?",
        options: ["Change GUI color.", "Limit/Guarantee bandwidth.", "Compress images.", "Encrypt traffic."],
        correct: 1,
        explanation: "Bandwidth management and QoS."
    },
    {
        question: "Precedence: PBR or Static Routing Table?",
        options: ["Static Routing Table", "PBR", "Equal.", "Depends on AD."],
        correct: 1,
        explanation: "PBR is evaluated before the static routing table."
    },
    {
        question: "Requirement for 'Deep SSL Inspection'?",
        options: ["CA certificate on client.", "Flow-based mode.", "HTTP website.", "No-Inspection first."],
        correct: 0,
        explanation: "Trusting the FortiGate CA is mandatory."
    },
    {
        question: "SD-WAN 'Best Quality' strategy?",
        options: ["Lowest latency/jitter/loss.", "All links simultaneously.", "Cheapest link.", "Most bandwidth."],
        correct: 0,
        explanation: "Picks cleanest path based on performance."
    },
    {
        question: "Command for 'Conserve Mode' check?",
        options: ["get system status", "diagnose hardware sysinfo memory", "get system performance status", "show system conserve-mode"],
        correct: 2,
        explanation: "Shows CPU/Memory and conserve mode status."
    },
    {
        question: "Conserve Mode effect?",
        options: ["System speedup.", "Limit/Stop security processes (AV) to protect memory.", "Power off.", "Save logs."],
        correct: 1,
        explanation: "Protective state to prevent memory exhaustion."
    },
    {
        question: "True about VDOMs?",
        options: ["Share routing table.", "Independent routing and policies.", "Max 2.", "Separate hardware."],
        correct: 1,
        explanation: "Provides logical firewall separation."
    },
    {
        question: "NAT Traversal (NAT-T) in IPsec?",
        options: ["Encrypt NAT.", "Pass ESP via UDP 4500.", "Speed up VPN.", "Bypass firewall."],
        correct: 1,
        explanation: "Encapsulates ESP in UDP for NAT compatibility."
    },
    {
        question: "Log type for admin login?",
        options: ["Traffic", "Security", "Event", "Forward"],
        correct: 2,
        explanation: "Event logs record system activities."
    },
    {
        question: "Firewall Policy 'Match VIP' option?",
        options: ["Internal server IP.", "External VIP object IP.", "Create new VIP.", "Ignore VIP."],
        correct: 1,
        explanation: "Destination must match the VIP object."
    },
    {
        question: "FortiGate Default Gateway?",
        options: ["Root VDOM IP.", "Static route 0.0.0.0/0.", "Internal IP.", "DNS IP."],
        correct: 1,
        explanation: "Route for all unmatched traffic."
    },
    {
        question: "Security Fabric key feature?",
        options: ["Single-pane management/visibility.", "Double speed.", "Offline work.", "Physical cable."],
        correct: 0,
        explanation: "Integrated visibility and automation."
    },
    {
        question: "When configuring Central NAT, where do you define the NAT translation rules?",
        options: ["Inside the Firewall Policy", "In the Central SNAT Policy", "In the IP Pool configuration", "In the interface settings"],
        correct: 1,
        explanation: "Central NAT separates NAT rules from firewall policies into a dedicated Central SNAT table."
    },
    {
        question: "Which of the following describes 'Strict' RPF check?",
        options: ["Checks if source is in the routing table.", "Checks if source is reachable via the *same* interface it arrived on.", "Checks only the destination IP.", "Allows all traffic but logs it."],
        correct: 1,
        explanation: "Strict RPF requires the packet to arrive on the interface that is the best return path to the source."
    },
    {
        question: "In Proxy-based inspection, what happens when a virus is detected in a large file?",
        options: ["The file is dropped immediately without user notification.", "The FortiGate resets the connection and can send a replacement block page.", "The file is allowed but logged.", "The virus is removed and the file continues."],
        correct: 1,
        explanation: "Proxy mode can terminate the connection and deliver a customizable block page to the user."
    },
    {
        question: "What is the purpose of the 'FSSO' (Fortinet Single Sign-On)?",
        options: ["To encrypt passwords.", "To automatically authenticate users based on their Windows AD login.", "To provide a portal for guest users.", "To manage firewall licenses."],
        correct: 1,
        explanation: "FSSO identifies users by monitoring AD login events, removing the need for repeated logins."
    },
    {
        question: "Which Web Filter feature can be used to prevent users from bypassing restrictions using Google Cache?",
        options: ["URL Filtering", "FortiGuard Categories", "Proxy Avoidance category", "Search Engine Constraint"],
        correct: 2,
        explanation: "The Proxy Avoidance category blocks tools and sites (like caches and translators) used to bypass filters."
    },
    {
        question: "What is 'SSL Inspection Exemptions' used for?",
        options: ["To speed up all traffic.", "To bypass decryption for sensitive sites like banking or healthcare.", "To block SSL completely.", "To ignore expired certificates."],
        correct: 1,
        explanation: "Exemptions prevent the decryption of sensitive personal data for privacy or compliance reasons."
    },
    {
        question: "What does the 'LEARN' action in a firewall policy do?",
        options: ["Automatically blocks threats.", "Monitors traffic to identify applications and suggests policy changes.", "Teaches the admin how to use FortiOS.", "Downloads updates."],
        correct: 1,
        explanation: "Learn mode is used for discovery to see what traffic exists before strictly enforcing rules."
    },
    {
        question: "Which protocol is used by the FortiGate to communicate with a FortiAnalyzer?",
        options: ["HTTP", "SSH", "OFTP (UDP/TCP 514 or 443)", "SNMP"],
        correct: 2,
        explanation: "FortiAnalyzer uses the Optimized Fabric Transfer Protocol (OFTP) for log transmission."
    },
    {
        question: "What is the function of the 'IPS Engine'?",
        options: ["To route packets.", "To perform signature and anomaly-based inspection against network threats.", "To manage the GUI.", "To sync HA units."],
        correct: 1,
        explanation: "The IPS engine (ipsengine) is responsible for most content-level security inspections."
    },
    {
        question: "How can you prevent a 'Man-in-the-Middle' attack on your FortiGate management session?",
        options: ["Use HTTP instead of HTTPS.", "Verify the FortiGate's certificate and use SSH/HTTPS only.", "Disable the password.", "Use Telnet."],
        correct: 1,
        explanation: "Secure protocols and certificate verification ensure you are talking to the legitimate device."
    },
    {
        question: "What is the default Administrative Distance of EBGP?",
        options: ["20", "110", "170", "200"],
        correct: 0,
        explanation: "EBGP has a default AD of 20, making it more preferred than OSPF (110)."
    },
    {
        question: "In an SD-WAN rule, what does the 'Manual' strategy do?",
        options: ["Picks the best link automatically.", "Assigns traffic to a specific interface in a fixed order.", "Balances traffic across all links.", "Asks the admin every time."],
        correct: 1,
        explanation: "Manual strategy forces traffic to the first interface listed that is currently up."
    },
    {
        question: "What is the purpose of 'Inter-VDOM Links'?",
        options: ["To connect the FortiGate to the internet.", "To allow traffic to pass between two VDOMs without leaving the physical unit.", "To sync HA units.", "To manage the switch."],
        correct: 1,
        explanation: "Logical internal interfaces used to route traffic between VDOMs internally."
    },
    {
        question: "Which HA setting ensures that a specific unit becomes the Primary after a reboot, provided it has a higher priority?",
        options: ["Priority", "Override", "Preemption", "Heartbeat"],
        correct: 1,
        explanation: "Enabling 'override' allows the unit with the highest priority to reclaim the Primary role even if the current Primary is stable."
    },
    {
        question: "What is the 'FGCP'?",
        options: ["Fortinet General Control Policy", "FortiGate Clustering Protocol", "Fast Gateway Connection Point", "Firewall Group Command Protocol"],
        correct: 1,
        explanation: "FGCP is the proprietary protocol used for FortiGate HA cluster communication."
    },
    {
        question: "Which routing protocol uses 'Cost' as its metric?",
        options: ["RIP", "BGP", "OSPF", "Static"],
        correct: 2,
        explanation: "OSPF calculates the best path based on the cumulative cost of the links (usually bandwidth-based)."
    },
    {
        question: "What is a 'Floating Static Route'?",
        options: ["A route that changes IP automatically.", "A backup route with a higher Administrative Distance than the primary route.", "A route used for load balancing.", "A route in a VDOM."],
        correct: 1,
        explanation: "Floating routes only appear in the routing table if the primary (lower AD) route becomes unavailable."
    },
    {
        question: "In IPsec, what is the 'Quick Mode'?",
        options: ["Another name for Phase 1.", "The negotiation of Phase 2 SAs.", "A way to connect faster.", "A mobile VPN feature."],
        correct: 1,
        explanation: "Quick Mode is the Phase 2 negotiation where data encryption keys and SAs are established."
    },
    {
        question: "What is the 'Blackhole' route used for?",
        options: ["To speed up traffic.", "To silently drop traffic for a specific destination and prevent routing loops.", "To log all traffic.", "To test the WAN."],
        correct: 1,
        explanation: "Blackhole routes are often used in VPN scenarios to drop traffic if the tunnel is down, rather than sending it out the default gateway."
    },
    {
        question: "Which HA mode load balances traffic across all cluster members?",
        options: ["Active-Passive", "Active-Active", "Standalone", "VDOM-Partitioned"],
        correct: 1,
        explanation: "Active-Active mode distributes the processing load among all members, though the Primary still handles some coordination."
    },
    {
        question: "Which IKE version supports EAP authentication and is more efficient for mobile users?",
        options: ["IKEv1", "IKEv2", "IKEv3", "SSL-VPN"],
        correct: 1,
        explanation: "IKEv2 offers better stability, NAT traversal support, and EAP-based authentication."
    },
    {
        question: "In SSL-VPN 'Tunnel Mode', what is required on the client's computer?",
        options: ["Just a web browser.", "The FortiClient software.", "A special USB key.", "An IPsec driver."],
        correct: 1,
        explanation: "Tunnel mode creates a virtual network adapter, requiring FortiClient (or similar) to be installed."
    },
    {
        question: "What is the 'Portal' in SSL-VPN 'Web Mode'?",
        options: ["A direct link to the server.", "A browser-based interface providing access to internal bookmarks and resources.", "The admin login page.", "A physical port."],
        correct: 1,
        explanation: "Web mode is clientless and uses a portal page to proxy access to internal apps."
    },
    {
        question: "What does 'IKE Phase 1 Main Mode' use to protect the identity of the peers?",
        options: ["3 messages.", "6 messages.", "9 messages.", "It doesn't protect identity."],
        correct: 1,
        explanation: "Main Mode uses 6 messages and encrypts the identity exchange, unlike Aggressive Mode (3 messages)."
    },
    {
        question: "Which feature allows a FortiGate to dynamically assign an IP address to a Dial-up VPN client?",
        options: ["DHCP Relay", "IP Pool (Mode Config)", "Static Routing", "DNS Filter"],
        correct: 1,
        explanation: "Mode Config (or IP Pools) allows the VPN gateway to push an IP address and other settings to the client."
    },
    {
        question: "What is 'XAUTH'?",
        options: ["Extended Authentication for IPsec VPNs.", "An encryption algorithm.", "A type of firewall policy.", "An HA setting."],
        correct: 0,
        explanation: "XAUTH adds an extra layer of user/password authentication to the Phase 1 IKE process."
    },
    {
        question: "When is 'Aggressive Mode' typically used in Phase 1?",
        options: ["When both peers have static IPs.", "When one peer has a dynamic IP (Dial-up) and a Pre-shared Key.", "Always.", "Never."],
        correct: 1,
        explanation: "Aggressive mode is faster (3 messages) and often used for dial-up clients where the Peer ID must be sent before encryption."
    },
    {
        question: "What is the 'Local ID' in a VPN configuration?",
        options: ["The password.", "An identifier (like a name or IP) sent to the remote peer to identify itself.", "The physical port.", "The VDOM name."],
        correct: 1,
        explanation: "Local ID helps the responder pick the correct VPN tunnel configuration when multiple tunnels exist on the same IP."
    },
    {
        question: "Which protocol does SSL-VPN use for the actual data transport?",
        options: ["ESP", "UDP 500", "HTTPS (TCP 443)", "GRE"],
        correct: 2,
        explanation: "SSL-VPN uses TLS/SSL (usually over TCP 443) to encapsulate traffic."
    },
    {
        question: "What is 'DTLS' in the context of SSL-VPN?",
        options: ["A slower version of SSL.", "An optional UDP-based transport to improve performance for real-time traffic like VoIP.", "A type of encryption.", "A logging protocol."],
        correct: 1,
        explanation: "Datagram TLS (DTLS) uses UDP to avoid the overhead of TCP's congestion control for VPN traffic."
    },
    {
        question: "Which command is used to see the list of currently logged-in SSL-VPN users?",
        options: ["get vpn ssl monitor", "get vpn session list", "diagnose vpn ssl list", "show vpn ssl users"],
        correct: 0,
        explanation: "'get vpn ssl monitor' (or the GUI Monitor) shows active SSL-VPN sessions."
    },
    {
        question: "In a 'Policy-based' VPN (legacy), where is the VPN referenced?",
        options: ["In the Static Route table.", "In the Firewall Policy action (IPSEC).", "In the interface settings.", "It isn't referenced."],
        correct: 1,
        explanation: "Policy-based VPNs use an 'IPSEC' action in the firewall policy itself, rather than a tunnel interface."
    },
    {
        question: "What is the 'Self-heal' feature in FortiGate SD-WAN?",
        options: ["It fixes physical cables.", "It automatically switches traffic back to a preferred link once it meets SLA again.", "It reboots the unit.", "It updates the signatures."],
        correct: 1,
        explanation: "SD-WAN rules monitor SLAs and 'heal' the path by reverting to the best link when it recovers."
    },
    {
        question: "Which of the following is true for an HA cluster in 'In-band' management?",
        options: ["Management is done via a dedicated port.", "Management is done via a production interface with a 'Manage-IP' configured.", "Management is impossible.", "Management is only via CLI."],
        correct: 1,
        explanation: "In-band management uses existing traffic ports for administrative access."
    },
    {
        question: "What is the default Administrative Distance of OSPF?",
        options: ["100", "110", "115", "120"],
        correct: 1,
        explanation: "OSPF has a standard AD of 110."
    },
    {
        question: "Which CLI command shows the total number of sessions currently handled by the FortiGate?",
        options: ["get system performance status", "get system session status", "show system sessions", "diagnose sys session stat"],
        correct: 0,
        explanation: "'get system performance status' provides a quick overview including CPU, Memory, and Session count."
    },
    {
        question: "What does the 'Session TTL' (Time To Live) represent?",
        options: ["The speed of the session.", "The maximum time a session can remain idle before being removed from the table.", "The age of the packet.", "The distance to the destination."],
        correct: 1,
        explanation: "TTL ensures that stale/idle sessions don't consume memory indefinitely."
    },
    {
        question: "Which FortiGuard service is required to identify the operating system of a device connecting to the network?",
        options: ["Antivirus", "IPS", "Device Identification (IoT Detection)", "Web Filter"],
        correct: 2,
        explanation: "Device Identification uses MAC OUI, HTTP headers, and other fingerprints to identify OS and device type."
    },
    {
        question: "What is the purpose of 'NAT64'?",
        options: ["To encrypt IPv6.", "To allow IPv6-only clients to communicate with IPv4-only servers.", "To speed up routing.", "To block IPv4."],
        correct: 1,
        explanation: "NAT64 performs translation between the two different IP versions."
    },
    {
        question: "What is the 'FortiGate Security Rating'?",
        options: ["A speed test.", "An automated audit that checks your configuration against best practices and security standards.", "A customer review.", "A license level."],
        correct: 1,
        explanation: "The Security Rating service provides a score and recommendations to improve your security posture."
    },
    {
        question: "What protocol does FortiManager use to manage FortiGate units?",
        options: ["FGFM (TCP 541)", "SSH", "HTTP", "SNMP"],
        correct: 0,
        explanation: "FortiGate to FortiManager (FGFM) protocol is used for management and heartbeats."
    },
    {
        question: "Which of the following is a 'Flow-based' feature?",
        options: ["Email filtering.", "Web filtering with override.", "IPS and Application Control.", "DLP with file archival."],
        correct: 2,
        explanation: "IPS and App Control are typically high-performance flow-based engines."
    },
    {
        question: "In HA, what does 'Monitored Interfaces' do?",
        options: ["Logs traffic on the port.", "Triggers a failover if a monitored physical interface goes down.", "Changes the IP.", "Syncs the VDOM."],
        correct: 1,
        explanation: "Link monitoring ensures the cluster fails over if a critical physical link fails."
    },
    {
        question: "What is a 'SLA' in SD-WAN?",
        options: ["Service Level Agreement - a target for latency, jitter, or packet loss.", "A type of VPN.", "A routing protocol.", "A firewall policy."],
        correct: 0,
        explanation: "SLAs define the 'quality' thresholds for links."
    },
    {
        question: "What is 'Session Dirty' flag?",
        options: ["A session with a virus.", "A session that needs to be re-evaluated against the policy table (usually after a config change).", "A closed session.", "A management session."],
        correct: 1,
        explanation: "Dirty sessions are marked for re-validation when policies change."
    },
    {
        question: "How do you back up the FortiGate configuration via CLI?",
        options: ["show full-configuration", "execute backup config", "get system backup", "save config"],
        correct: 1,
        explanation: "'execute backup config' is the command to export the config file."
    },
    {
        question: "What is 'Deep Inspection' also known as?",
        options: ["SSL Mirroring", "SSL Proxy / Man-in-the-Middle", "Certificate Inspection", "SSH Inspection"],
        correct: 1,
        explanation: "It acts as a proxy to decrypt and re-encrypt SSL traffic."
    },
    {
        question: "Which profile type is used to block specific files (like .exe) from being downloaded?",
        options: ["Web Filter", "Antivirus", "File Filter", "Application Control"],
        correct: 2,
        explanation: "File Filter profiles (or DLP) can block files based on extension or content type."
    },
    {
        question: "What is 'FortiToken' used for?",
        options: ["A license for VPN.", "Two-Factor Authentication (2FA).", "A management tool.", "A hardware port."],
        correct: 1,
        explanation: "FortiToken provides a one-time password (OTP) for secure login."
    },
    {
        question: "Which CLI command clears all active sessions on a FortiGate?",
        options: ["execute clear sessions", "diagnose sys session clear", "get system session kill", "purge sessions"],
        correct: 1,
        explanation: "'diagnose sys session clear' will wipe the session table (use with caution!)."
    },
    {
        question: "What is 'WAD'?",
        options: ["Wide Area Deployment", "Worker-based Application Daemon (the proxy process)", "Wireless Access Device", "Web Application Defense"],
        correct: 1,
        explanation: "WAD is the process responsible for proxy-based inspection (Web, FTP, etc.)."
    },
    {
        question: "True or False: A VDOM can have its own independent system time.",
        options: ["True", "False"],
        correct: 1,
        explanation: "System time is global; VDOMs share the same system clock."
    },
    {
        question: "What is 'External Connectors' used for?",
        options: ["To plug in cables.", "To integrate with SDN controllers like AWS, Azure, or ACI.", "To connect to FortiAnalyzer.", "To manage the console."],
        correct: 1,
        explanation: "Connectors allow FortiGate to pull dynamic objects from cloud and SDN environments."
    },
    {
        question: "Which protocol is used for 'FortiGuard' web filter lookups?",
        options: ["TCP 443", "UDP 53", "UDP 8888 or HTTPS 443", "TCP 80"],
        correct: 2,
        explanation: "FortiGuard rating lookups typically use UDP 8888 or HTTPS 443."
    },
    {
        question: "What is a 'Conserve Mode' threshold?",
        options: ["The speed limit.", "The memory percentage at which the FortiGate enters or leaves conserve mode.", "The number of users.", "The temperature."],
        correct: 1,
        explanation: "Conserve mode is triggered when memory usage hits a specific high-water mark (e.g., 88%)."
    },
    {
        question: "What is 'FortiSandbox'?",
        options: ["A playground for admins.", "A device/service that executes suspicious files in a safe environment to detect zero-day threats.", "A backup tool.", "A firewall for kids."],
        correct: 1,
        explanation: "Sandbox analyzes unknown files for malicious behavior."
    },
    {
        question: "Which of the following is NOT a FortiGate log severity level?",
        options: ["Notice", "Emergency", "Alert", "Minor"],
        correct: 3,
        explanation: "Standard levels are: Emergency, Alert, Critical, Error, Warning, Notice, Information, Debug."
    },
    {
        question: "What is 'Traffic Sniffer' useful for?",
        options: ["Stopping viruses.", "Capturing packets to analyze traffic flows and headers (similar to Wireshark).", "Encrypting data.", "Routing."],
        correct: 1,
        explanation: "'diagnose sniffer packet' is the CLI tool for packet capture."
    },
    {
        question: "In HA, what is 'Uninterruptible Upgrade'?",
        options: ["An upgrade that never finishes.", "A process that upgrades cluster members one by one to maintain uptime.", "A license feature.", "A manual process."],
        correct: 1,
        explanation: "HA allows for firmware updates with minimal traffic disruption by rolling the update through the cluster."
    },
    {
        question: "What is 'Anycast' in FortiGuard?",
        options: ["A way to broadcast to everyone.", "A networking method where lookups are routed to the nearest available FortiGuard server.", "A type of VPN.", "A video protocol."],
        correct: 1,
        explanation: "Anycast improves lookup speed and reliability by using the closest server."
    },
    {
        question: "What is the purpose of 'IP Pools'?",
        options: ["To store water.", "To define a range of external IP addresses for Source NAT.", "To manage DNS.", "To assign IPs to VDOMs."],
        correct: 1,
        explanation: "IP Pools allow you to specify which public IPs are used for NAT translation."
    },
    {
        question: "Which of the following is a valid IP Pool type?",
        options: ["Overload", "One-to-One", "Fixed Port Range", "All of the above"],
        correct: 3,
        explanation: "FortiOS supports Overload, One-to-One, Fixed Port Range, and Port Block Allocation."
    },
    {
        question: "What is 'Central DNAT'?",
        options: ["NAT in the center of the network.", "A dedicated table for Destination NAT (VIPs), separate from firewall policies.", "A legacy feature.", "A cloud feature."],
        correct: 1,
        explanation: "Central DNAT (Virtual IPs) allows for global mapping of destination addresses."
    },
    {
        question: "What is the purpose of 'Firewall Schedules'?",
        options: ["To plan coffee breaks.", "To enable or disable firewall policies based on specific times or dates.", "To schedule backups.", "To update firmware."],
        correct: 1,
        explanation: "Schedules allow for time-based access control (e.g., office hours only)."
    },
    {
        question: "Which of the following is a valid 'Service' in a firewall policy?",
        options: ["TCP 80", "UDP 53", "ICMP", "All of the above"],
        correct: 3,
        explanation: "Services define the protocol and port(s) for the policy match."
    },
    {
        question: "What is 'Security Fabric Root'?",
        options: ["The password for the fabric.", "The primary FortiGate that coordinates the entire Security Fabric.", "A cable.", "A license."],
        correct: 1,
        explanation: "Every fabric has one Root FortiGate that downstream devices connect to."
    },
    {
        question: "Which of the following is a benefit of VDOMs?",
        options: ["Reduced hardware costs.", "Simplified management for single-user networks.", "Increased physical bandwidth.", "Better cooling."],
        correct: 0,
        explanation: "VDOMs allow one physical box to do the work of many logical ones, saving cost and space."
    },
    {
        question: "What is 'Management VDOM'?",
        options: ["The only VDOM that can have policies.", "The VDOM used for system management and FortiGuard communication.", "A VDOM for the boss.", "The first VDOM created."],
        correct: 1,
        explanation: "It's the control center for system-wide management tasks."
    },
    {
        question: "Which of the following can be a member of an SD-WAN zone?",
        options: ["Physical interfaces", "VLAN sub-interfaces", "IPsec tunnel interfaces", "All of the above"],
        correct: 3,
        explanation: "SD-WAN is very flexible and supports various interface types."
    },
    {
        question: "What is 'SD-WAN Rule'?",
        options: ["A law for the internet.", "A policy that defines which traffic uses which SD-WAN member based on targets or priority.", "A physical port.", "A VPN setting."],
        correct: 1,
        explanation: "Rules direct traffic flow over the SD-WAN interfaces."
    },
    {
        question: "What is 'Passive Scanning' in Web Filter?",
        options: ["Scanning while sleeping.", "Inspecting traffic without changing it, usually for reporting or logging only.", "A slow scan.", "Scanning only offline files."],
        correct: 1,
        explanation: "Passive monitoring doesn't block but provides visibility."
    },
    {
        question: "What is 'FortiClient EMS'?",
        options: ["An Emergency Medical System.", "Endpoint Management Server - used to centrally manage and deploy FortiClient.", "An email server.", "A type of firewall."],
        correct: 1,
        explanation: "EMS is the central brain for managing all your endpoints (laptops, phones, etc.)."
    },
    {
        question: "Which profile is used to protect against 'SQL Injection' and 'Cross-Site Scripting'?",
        options: ["Antivirus", "IPS", "Web Filter", "WAF (Web Application Firewall)"],
        correct: 3,
        explanation: "WAF is specifically designed to protect web servers from application-layer attacks."
    },
    {
        question: "What is the purpose of 'DLP' (Data Leak Prevention)?",
        options: ["To speed up downloads.", "To prevent sensitive data (like credit card numbers) from leaving the network.", "To block all emails.", "To encrypt the disk."],
        correct: 1,
        explanation: "DLP scans content for patterns or fingerprints to stop data theft."
    },
    {
        question: "What is a 'DLP Sensor'?",
        options: ["A physical camera.", "A collection of DLP rules and filters applied to a policy.", "A temperature gauge.", "A hardware chip."],
        correct: 1,
        explanation: "Sensors aggregate multiple rules to scan traffic."
    },
    {
        question: "Which of the following is a valid log destination for a FortiGate?",
        options: ["Local Disk/Memory", "FortiAnalyzer", "Syslog Server", "All of the above"],
        correct: 3,
        explanation: "FortiGate can send logs to multiple local and remote destinations simultaneously."
    },
    {
        question: "What is 'Log Anonymization'?",
        options: ["Deleting logs.", "Replacing sensitive info (like usernames) in logs with hashes or generic strings for privacy compliance.", "Encrypting logs.", "Compressing logs."],
        correct: 1,
        explanation: "Used to meet GDPR or other privacy regulations."
    },
    {
        question: "What is the default port for the FortiGate GUI?",
        options: ["80", "443", "8080", "Any port defined by the admin (default is HTTPS 443)."],
        correct: 3,
        explanation: "While default is 443, it is highly recommended to change it for security."
    },
    {
        question: "Which command reboots the FortiGate?",
        options: ["execute reboot", "reboot now", "get system reboot", "shutdown -r"],
        correct: 0,
        explanation: "'execute reboot' is the standard way to restart the unit via CLI."
    },
    {
        question: "What is 'FortiCare'?",
        options: ["A health app.", "The technical support and warranty service for Fortinet products.", "A firewall feature.", "A training portal."],
        correct: 1,
        explanation: "Provides access to support engineers and hardware replacement."
    }
    {
        question: "When configuring HA, what is the effect of the 'set override enable' command?",
        options: ["The cluster will never fail over.", "The unit with the highest priority always becomes Primary after a reboot.", "The Secondary unit takes over immediately.", "It disables heartbeat monitoring."],
        correct: 1,
        explanation: "With 'override' enabled, the cluster uses Priority as the first tie-breaker after uptime is ignored, allowing a preferred unit to reclaim the Primary role."
    },
    {
        question: "Which SD-WAN strategy is best for ensuring real-time traffic (VoIP) uses the link with the lowest Jitter?",
        options: ["Manual", "Lowest Cost (SLA)", "Maximize Bandwidth (SLA)", "Best Quality"],
        correct: 3,
        explanation: "The 'Best Quality' strategy allows you to pick a specific quality criterion like Jitter or Latency to select the best link."
    },
    {
        question: "In the Fortinet Security Fabric, what is the role of the 'Downstream' FortiGate?",
        options: ["It manages the Root FortiGate.", "It sends logs and telemetry to the Root FortiGate.", "It is only used for backup.", "It cannot have its own policies."],
        correct: 1,
        explanation: "Downstream devices participate in the fabric by providing telemetry and receiving global objects from the Root."
    },
    {
        question: "What is the primary difference between 'Split-Task' VDOM and 'Multi-VDOM' mode?",
        options: ["Split-Task has only two VDOMs: Root and FG-Traffic.", "Multi-VDOM is for small devices only.", "Split-Task is faster.", "Multi-VDOM doesn't support NAT."],
        correct: 0,
        explanation: "Split-Task mode is a specific dual-VDOM setup where one VDOM is for management and the other is for all traffic."
    },
    {
        question: "Which FSSO mode requires a 'Collector Agent' installed on a Windows server?",
        options: ["Agentless Polling", "DC Agent Mode", "Radius Accounting", "Local FSSO"],
        correct: 1,
        explanation: "DC Agent mode uses agents on DCs that send events to a central Collector Agent."
    },
    {
        question: "When using 'Certificate Inspection', which part of the encrypted session does FortiGate examine?",
        options: ["The entire HTTP payload.", "The SNI (Server Name Indication) in the Client Hello.", "The user's password.", "The database records."],
        correct: 1,
        explanation: "Certificate inspection only looks at the cleartext headers (SNI) and the certificate itself, without decrypting the payload."
    },
    {
        question: "How does NAT-T (NAT Traversal) handle IPsec traffic passing through a NAT device?",
        options: ["It changes the ESP protocol to TCP 443.", "It encapsulates ESP packets into UDP 4500.", "It disables NAT on the router.", "It only works with Static NAT."],
        correct: 1,
        explanation: "NAT-T uses UDP 4500 to allow ESP traffic (which has no ports) to be translated by NAT devices."
    },
    {
        question: "In a Firewall Policy, what happens if the 'Negate Source' option is checked?",
        options: ["The policy matches any source *except* the one specified.", "The policy is disabled.", "The source IP is hidden.", "The traffic is dropped."],
        correct: 0,
        explanation: "Negate matches the inverse of the selected object."
    },
    {
        question: "What is a benefit of 'Quick' Antivirus scan mode?",
        options: ["It scans inside ZIP files.", "It only scans the beginning of files for faster processing.", "It never updates signatures.", "It blocks all unknown files."],
        correct: 1,
        explanation: "Quick scan (available in some versions/modes) focuses on file headers and trailers to improve performance."
    },
    {
        question: "Which feature of the IPS engine detects unusual traffic patterns that don't match a specific signature?",
        options: ["Signature Matching", "Protocol Decoder", "Anomaly Detection", "Deep Packet Inspection"],
        correct: 2,
        explanation: "Anomaly detection looks for deviations from normal protocol behavior (e.g., too many SYN packets)."
    },
    {
        question: "Can an SD-WAN Zone contain interfaces from different VDOMs?",
        options: ["Yes, always.", "No, all members must belong to the same VDOM.", "Only if they are physical ports.", "Only in Global VDOM."],
        correct: 1,
        explanation: "SD-WAN is a VDOM-level feature; all member interfaces must be in the same VDOM."
    },
    {
        question: "In HA, what does the 'Hello Interval' define?",
        options: ["How often the admin logs in.", "How frequently heartbeat packets are sent to peers.", "The speed of the WAN.", "The time before a session expires."],
        correct: 1,
        explanation: "The Hello Interval is the frequency of heartbeat checks between cluster members."
    },
    {
        question: "What is the purpose of an 'NP7' processor in high-end FortiGate models?",
        options: ["To manage the GUI.", "To offload network traffic and IPsec encryption for multi-gigabit speeds.", "To store logs.", "To provide Wi-Fi."],
        correct: 1,
        explanation: "Network Processors (NP) provide hardware acceleration for traffic processing."
    },
    {
        question: "Which command would you use to see why a specific packet was dropped by the FortiGate?",
        options: ["diagnose debug flow", "get system status", "show firewall policy", "diagnose hardware test"],
        correct: 0,
        explanation: "'diagnose debug flow' traces the packet's journey through the CPU and shows the drop reason."
    },
    {
        question: "In 'Agentless' FSSO polling, which protocol does the FortiGate use to communicate with the Domain Controller?",
        options: ["SMB/CIFS or WMI", "LDAP", "RADIUS", "SNMP"],
        correct: 0,
        explanation: "Agentless polling uses SMB or WMI to read the event logs directly from the DC."
    },
    {
        question: "What is 'Web Rating Override' used for?",
        options: ["To change the category of a specific URL locally on the FortiGate.", "To block all websites.", "To speed up DNS.", "To bypass the firewall."],
        correct: 0,
        explanation: "Overrides allow you to re-categorize a site (e.g., move a site from 'Social Media' to 'Education')."
    },
    {
        question: "How does Application Control handle 'Cloud-based' signatures?",
        options: ["It downloads all of them to disk.", "It queries the FortiGuard cloud for signatures not found in the local database.", "It ignores them.", "It only works with a local FortiAnalyzer."],
        correct: 1,
        explanation: "The local database contains common signatures; rare ones can be checked against the cloud."
    },
    {
        question: "What happens when the FortiGate log disk becomes full?",
        options: ["The device reboots.", "It stops logging or overwrites the oldest logs based on configuration.", "It blocks all traffic.", "It deletes the firmware."],
        correct: 1,
        explanation: "The 'roll-over' or 'stop-when-full' setting determines behavior when the disk is at capacity."
    },
    {
        question: "Which sniffer command filter would capture traffic on port 443 only?",
        options: ["'port 443'", "'tcp 443'", "'host 443'", "'ssl 443'"],
        correct: 0,
        explanation: "The filter 'port 443' is standard bpf syntax for capturing that specific port."
    },
    {
        question: "What is the Administrative Distance of a route learned via IBGP?",
        options: ["20", "110", "200", "255"],
        correct: 2,
        explanation: "IBGP has a default AD of 200 (less preferred than EBGP, OSPF, etc.)."
    },
    {
        question: "When troubleshooting IPsec, what does the 'diagnose vpn ike log-filter' command do?",
        options: ["Deletes all VPN logs.", "Restricts the debug output to a specific peer or IP.", "Encrypts the log file.", "Starts the VPN tunnel."],
        correct: 1,
        explanation: "Filtering ensures you only see debug messages for the specific tunnel you are troubleshooting."
    },
    {
        question: "In Central NAT mode, where is the SNAT (Source NAT) address defined?",
        options: ["In the Firewall Policy.", "In the Central SNAT Policy table.", "In the Interface settings.", "In the Routing table."],
        correct: 1,
        explanation: "Central NAT separates NAT configuration from the security policies."
    },
    {
        question: "What is a 'VIP' (Virtual IP) primarily used for?",
        options: ["Hiding the admin's IP.", "Mapping a public IP/Port to an internal server (Destination NAT).", "Creating a virtual interface.", "Assigning IPs to VPN clients."],
        correct: 1,
        explanation: "VIPs allow external users to reach internal services via a public IP."
    },
    {
        question: "Which of the following has the highest precedence in FortiOS routing?",
        options: ["Static Route", "OSPF Route", "Policy-Based Route (PBR)", "BGP Route"],
        correct: 2,
        explanation: "PBR is evaluated before the main routing table lookup."
    },
    {
        question: "In the session table, what does the 'proto_state=01' for TCP typically mean?",
        options: ["Session is established.", "Handshake in progress (SYN sent).", "Session closed.", "UDP traffic."],
        correct: 1,
        explanation: "TCP state 01 indicates the initial SYN has been sent but not yet acknowledged."
    },
    {
        question: "What happens to an HA cluster if a 'Monitored Interface' goes down on the Primary unit?",
        options: ["The unit reboots.", "The cluster triggers a failover to the Secondary unit.", "Nothing happens.", "The unit disables all policies."],
        correct: 1,
        explanation: "Interface monitoring ensures the cluster reacts to physical link failures, not just unit power loss."
    },
    {
        question: "What is the main benefit of enabling 'DTLS' for SSL-VPN?",
        options: ["Stronger encryption.", "Reduced latency for time-sensitive traffic like VoIP or Video.", "Easier configuration.", "Lower battery usage on phones."],
        correct: 1,
        explanation: "DTLS uses UDP, avoiding the 'TCP-over-TCP' performance penalty."
    },
    {
        question: "Which authentication protocol is typically used to integrate FortiGate with Microsoft Active Directory via LDAP?",
        options: ["RADIUS", "LDAP", "TACACS+", "SAML"],
        correct: 1,
        explanation: "LDAP is the native protocol for querying and authenticating against AD objects."
    },
    {
        question: "A log entry with 'Severity: Notice' indicates what?",
        options: ["A critical system failure.", "Normal system operation (e.g., policy change or login).", "A virus was found.", "The device is overheating."],
        correct: 1,
        explanation: "Notice level is for significant but non-error events."
    },
    {
        question: "In the Security Fabric, how are 'Global Objects' (like addresses) synchronized?",
        options: ["Manually copied by the admin.", "Automatically pushed from the Root FortiGate to downstream devices.", "Via email.", "They are not synchronized."],
        correct: 1,
        explanation: "The Fabric Root can push objects to ensure consistent policy across the network."
    },
    {
        question: "What does 'Forward Error Correction' (FEC) in SD-WAN do?",
        options: ["Deletes bad packets.", "Adds redundant data to packets to recover lost data on poor quality links.", "Speeds up the CPU.", "Encrypts the link."],
        correct: 1,
        explanation: "FEC improves performance on lossy links by allowing the receiver to reconstruct lost packets."
    },
    {
        question: "Which VDOM is responsible for handling 'FortiGuard' updates by default?",
        options: ["The first VDOM created.", "The Management VDOM (usually Root).", "All VDOMs independently.", "The Global VDOM."],
        correct: 1,
        explanation: "System-level tasks like updates and NTP are handled by the Management VDOM."
    },
    {
        question: "What is the purpose of 'Configuration Encryption' when performing a backup?",
        options: ["To make the file smaller.", "To protect sensitive data like passwords and keys within the config file.", "To prevent the file from being deleted.", "To allow it to be read by any text editor."],
        correct: 1,
        explanation: "Encrypted backups require a password to restore and protect secrets."
    },
    {
        question: "Which CLI command allows you to search for a specific string in the configuration?",
        options: ["show | grep <string>", "find <string>", "get system search", "show full-configuration"],
        correct: 0,
        explanation: "Grep is used to filter CLI output for specific patterns."
    },
    {
        question: "How many firmware images (partitions) can a FortiGate hold simultaneously?",
        options: ["1", "2 (Active and Backup)", "4", "As many as the disk allows."],
        correct: 1,
        explanation: "FortiGate typically has two partitions, allowing for easy rollback to a previous version."
    },
    {
        question: "If 'FortiSandbox' is enabled in the Antivirus profile, what happens to a suspicious file?",
        options: ["It is deleted immediately.", "It is sent to the Sandbox for analysis while the user might receive the file or be blocked based on 'Monitor' vs 'Block' settings.", "It is ignored.", "It is renamed."],
        correct: 1,
        explanation: "Sandbox analysis happens in parallel or as a precursor to allowing the file."
    },
    {
        question: "What does the 'Safe Search' feature in Web Filtering do?",
        options: ["Blocks all search engines.", "Enforces the 'Strict' search settings on Google, Bing, and YouTube.", "Encrypts search queries.", "Logs search terms only."],
        correct: 1,
        explanation: "Safe Search ensures that search engines return filtered, family-friendly results."
    },
    {
        question: "In Application Control, what is an 'Override'?",
        options: ["A way to ignore all apps.", "A specific rule for one application that takes precedence over the category filter.", "A hardware setting.", "A backup policy."],
        correct: 1,
        explanation: "Overrides allow you to permit one specific app while blocking the rest of its category."
    },
    {
        question: "What is an 'IPS Sensor'?",
        options: ["A hardware probe.", "A group of IPS signatures and filters applied to a firewall policy.", "A thermometer.", "A light sensor."],
        correct: 1,
        explanation: "Sensors are logical objects that define what traffic the IPS engine should look for."
    },
    {
        question: "What is the purpose of 'External Connectors' in the Security Fabric?",
        options: ["Connecting to non-Fortinet switches.", "Dynamic integration with SDN/Cloud platforms (AWS, Azure, VMWare).", "Plugging in USB drives.", "Connecting to the console port."],
        correct: 1,
        explanation: "Connectors allow FortiGate to pull dynamic metadata (like IP tags) from cloud environments."
    },
    {
        question: "What is the default IP address range used by FortiGate HA for heartbeat communication?",
        options: ["192.168.1.x", "10.0.0.x", "169.254.x.x", "172.16.x.x"],
        correct: 2,
        explanation: "FortiGate uses the APIPA range (169.254.x.x) for internal HA cluster communication."
    },
    {
        question: "When configuring an SD-WAN Performance SLA, what is 'Jitter'?",
        options: ["The speed of the link.", "The variation in the delay of received packets.", "The total packet loss.", "The physical length of the cable."],
        correct: 1,
        explanation: "Jitter measures the stability of the latency; high jitter is bad for voice/video."
    },
    {
        question: "If Split Tunneling is enabled in SSL-VPN, which traffic goes through the tunnel?",
        options: ["All internet traffic.", "Only traffic destined for the subnets defined in the 'Routing Address' list.", "No traffic.", "Only DNS traffic."],
        correct: 1,
        explanation: "Split tunneling saves bandwidth by only sending corporate-bound traffic over the VPN."
    },
    {
        question: "What is the purpose of the 'UUID' assigned to every firewall policy?",
        options: ["To identify the policy uniquely across the Security Fabric and for logging.", "To encrypt the policy.", "To determine the order of the policy.", "To speed up the policy."],
        correct: 0,
        explanation: "UUIDs provide a permanent reference for a policy, even if its ID or name changes."
    },
    {
        question: "What does 'Reliable' Syslog (over TCP) provide compared to standard UDP Syslog?",
        options: ["Encryption.", "Guaranteed delivery of log messages via connection-oriented transport.", "Faster logging.", "Smaller log files."],
        correct: 1,
        explanation: "TCP-based syslog ensures logs aren't lost during network congestion."
    },
    {
        question: "Which command is required *before* any 'diagnose debug' output will be shown in the CLI?",
        options: ["diagnose debug reset", "diagnose debug enable", "diagnose debug info", "execute log display"],
        correct: 1,
        explanation: "'diagnose debug enable' is the master switch for showing debug messages."
    },
    {
        question: "How do 'Inter-VDOM Links' appear in the FortiOS configuration?",
        options: ["As physical cables.", "As a pair of virtual interfaces (e.g., v0-root and v1-traffic).", "As a single IP address.", "As a VPN tunnel."],
        correct: 1,
        explanation: "Inter-VDOM links are logical pairs that connect two virtual firewalls."
    },
    {
        question: "In FSSO, what is the purpose of 'Workstation Check'?",
        options: ["To see if the user's PC is turned on.", "To verify the user is still logged into the workstation via WMI or Registry.", "To install software.", "To scan for viruses."],
        correct: 1,
        explanation: "Workstation check prevents 'stale' sessions if a user disconnects without logging out."
    },
    {
        question: "Which Web Filter feature allows an admin to restrict the total time a user spends on 'Social Media' sites?",
        options: ["URL Filter", "FortiGuard Category Quota", "Safe Search", "Web Rating Override"],
        correct: 1,
        explanation: "Quotas allow for time or volume-based limits on specific categories."
    },
    {
        question: "Why is 'Deep Inspection' required for effective Application Control of HTTPS traffic?",
        options: ["Because apps use SSL to hide their signatures.", "To speed up the apps.", "To bypass the firewall.", "It is not required."],
        correct: 0,
        explanation: "Without decryption, the FortiGate can only see the certificate, not the specific app behavior inside the tunnel."
    },
    {
        question: "What is the 'IPS Signature TTL' used for?",
        options: ["The age of the virus.", "How long a dynamic signature remains in memory.", "The speed of the scan.", "The time before a session drops."],
        correct: 1,
        explanation: "TTL manages memory by removing signatures that haven't been matched recently."
    },
    {
        question: "In HA Active-Passive mode, which of the following is NOT synchronized to the Secondary unit by default?",
        options: ["Firewall Policies", "Static Routes", "Management IP of the Primary unit", "DHCP Server leases"],
        correct: 2,
        explanation: "Management settings (like unique IPs for the unit itself) are often kept local to avoid conflicts."
    },
    {
        question: "Which CLI command resets a FortiGate to its out-of-the-box factory settings?",
        options: ["execute reboot", "execute factoryreset", "set system reset", "format logdisk"],
        correct: 1,
        explanation: "'execute factoryreset' wipes all configuration and reboots to default."
    },
    {
        question: "What does the 'set-confirm' mode in the CLI do?",
        options: ["Asks 'Are you sure?' before every command.", "Requires the admin to type 'confirm' to save changes before a timeout, or it rolls back.", "Encrypts the CLI.", "Logs every command."],
        correct: 1,
        explanation: "This is a safety feature to prevent being locked out by a bad configuration change."
    },
    {
        question: "What is a 'Recursive Lookup' in routing?",
        options: ["A loop.", "When the next-hop of a route is not directly connected and requires another lookup in the table.", "A DNS query.", "A slow route."],
        correct: 1,
        explanation: "The router must resolve the next-hop IP through another route (e.g., a BGP route pointing to a loopback)."
    },
    {
        question: "What is 'Fixed Port' NAT used for?",
        options: ["To block all ports.", "To ensure the source port of a packet remains the same after NAT translation (often for SIP/VoIP).", "To speed up NAT.", "To use only port 80."],
        correct: 1,
        explanation: "Some protocols require the source port to remain unchanged for the session to work."
    },
    {
        question: "In the Security Fabric, what is an 'Automation Stitch' trigger?",
        options: ["The action taken (e.g., email).", "The event that starts the automation (e.g., a compromise log or a schedule).", "A physical button.", "A license."],
        correct: 1,
        explanation: "Triggers define the 'When' of an automation workflow."
    },
    {
        question: "How can you exempt 'Finance and Banking' sites from Deep SSL Inspection for privacy?",
        options: ["By IP address only.", "Using the 'Exempt from SSL Inspection' category list in the SSL profile.", "By disabling the firewall.", "By using a proxy."],
        correct: 1,
        explanation: "FortiOS provides pre-defined categories that can be bypassed for compliance."
    },
    {
        question: "Which command shows real-time CPU and Memory usage by process (similar to 'top' in Linux)?",
        options: ["get system status", "diagnose sys top", "diagnose hardware info", "show system performance"],
        correct: 1,
        explanation: "'diagnose sys top' lists running daemons and their resource consumption."
    },
    {
        question: "What are 'Phase 2 Selectors' in an IPsec VPN?",
        options: ["The encryption algorithms.", "The local and remote subnets that are allowed to pass traffic through the tunnel.", "The passwords.", "The interface names."],
        correct: 1,
        explanation: "Selectors define the 'interesting traffic' that the VPN tunnel will carry."
    },
    {
        question: "Which feature of FortiGate HA allows you to upgrade firmware with zero downtime?",
        options: ["Fast-track upgrade.", "Uninterruptible Upgrade (rolling upgrade).", "Sync-upgrade.", "Manual partition switch."],
        correct: 1,
        explanation: "HA allows the cluster to upgrade members one-by-one, keeping at least one unit active at all times."
    },
    {
        question: "In an SD-WAN Health Check, what does 'Packet Loss' measure?",
        options: ["The number of virus-infected packets.", "The percentage of packets that fail to reach the target and return.", "The speed of the link.", "The size of the packets."],
        correct: 1,
        explanation: "Packet loss is a key metric for link quality; high loss triggers a link failover in SD-WAN."
    },
    {
        question: "What is the primary function of the 'IPS Engine' (ipsengine)?",
        options: ["To manage the web GUI.", "To perform protocol decoding, signature matching, and anomaly detection.", "To route traffic between VDOMs.", "To encrypt VPN sessions."],
        correct: 1,
        explanation: "The IPS engine is the core process for content-level security inspections."
    },
    {
        question: "When configuring FSSO, what is the 'Collector Agent' responsible for?",
        options: ["Storing logs.", "Gathering login events from DCs and sending them to the FortiGate.", "Routing traffic.", "Managing licenses."],
        correct: 1,
        explanation: "The Collector Agent acts as a middleman between the Windows AD and the FortiGate."
    },
    {
        question: "Which of the following is a 'Proxy-based' only feature?",
        options: ["Application Control.", "Web Filtering with 'Safe Search' and 'YouTube Education' headers.", "Intrusion Prevention System.", "TCP Three-way handshake."],
        correct: 1,
        explanation: "Proxy-based mode allows for header manipulation and deeper content inspection that flow-based mode cannot do."
    },
    {
        question: "What is the purpose of 'Dead Peer Detection' (DPD) in an IPsec VPN?",
        options: ["To encrypt data.", "To detect if the remote VPN gateway is still alive and responsive.", "To speed up the tunnel.", "To assign IP addresses."],
        correct: 1,
        explanation: "DPD prevents the tunnel from staying 'up' if the remote peer has failed."
    },
    {
        question: "In 'Active-Active' HA, how is traffic distributed?",
        options: ["All traffic is processed by the Primary unit only.", "The Primary unit distributes UTM processing (like AV/IPS) to the Secondary unit(s).", "Traffic is split 50/50 by the router.", "It is randomly assigned."],
        correct: 1,
        explanation: "In Active-Active, the Primary still receives traffic but offloads the CPU-intensive UTM scanning to other members."
    },
    {
        question: "What does the 'conserve mode' state 'RED' mean?",
        options: ["Everything is fine.", "Memory usage is extremely high and the system is dropping new sessions.", "A virus was found.", "The device is in trial mode."],
        correct: 1,
        explanation: "The 'Red' threshold is the critical point where memory exhaustion is imminent."
    },
    {
        question: "Which CLI command allows you to view the real-time routing table for a specific VDOM?",
        options: ["get system status", "get router info routing-table all", "show system routing", "diagnose sys route list"],
        correct: 1,
        explanation: "This command displays the active routes in the forwarding table."
    },
    {
        question: "What is 'Split-Tunneling' in a Dial-up VPN?",
        options: ["Two tunnels for redundancy.", "Sending only corporate-bound traffic through the VPN while other traffic uses the local ISP.", "A way to bypass the firewall.", "Encrypting only half the data."],
        correct: 1,
        explanation: "Split tunneling saves VPN bandwidth and reduces latency for non-corporate traffic."
    },
    {
        question: "Which protocol is used for 'FortiGuard' rating lookups by default?",
        options: ["TCP 80", "HTTPS (TCP 443) or UDP 8888", "UDP 53", "SSH"],
        correct: 1,
        explanation: "FortiOS uses secure and efficient protocols for real-time category lookups."
    },
    {
        question: "What is a 'SLA' in the context of FortiGate SD-WAN?",
        options: ["Service Level Agreement - target thresholds for link performance.", "A type of firewall policy.", "A log level.", "A hardware port."],
        correct: 0,
        explanation: "SLAs define the required quality of service for a link to be considered 'healthy'."
    },
    {
        question: "In 'Flow-based' inspection, what happens to a packet that matches a signature?",
        options: ["It is buffered completely and then scanned.", "It is scanned on-the-fly as it passes through the FortiGate with minimal latency.", "It is deleted.", "It is sent to the cloud."],
        correct: 1,
        explanation: "Flow-based inspection is designed for high performance by scanning packets without full buffering."
    },
    {
        question: "Which of the following can be used as a 'Match' criterion in a Firewall Policy?",
        options: ["Source Address.", "User/Group.", "Schedule.", "All of the above."],
        correct: 3,
        explanation: "Firewall policies are very granular and can match based on many factors."
    },
    {
        question: "What is the purpose of 'Security Fabric' automation stitches?",
        options: ["To sew hardware together.", "To automatically respond to security events (e.g., quarantine a host if a virus is found).", "To update firmware.", "To manage passwords."],
        correct: 1,
        explanation: "Automation stitches provide a programmable response to fabric-wide events."
    },
    {
        question: "What is 'FortiLink'?",
        options: ["A browser bookmark.", "The management protocol used by FortiGate to control FortiSwitches.", "A type of fiber cable.", "A VPN client."],
        correct: 1,
        explanation: "FortiLink allows for seamless integration and management of the switching layer."
    },
    {
        question: "Which VDOM type is used only for management traffic and cannot have firewall policies for user traffic?",
        options: ["Traffic VDOM.", "Management VDOM.", "Global VDOM.", "Root VDOM."],
        correct: 1,
        explanation: "The management VDOM is dedicated to system-level communication."
    },
    {
        question: "What does the 'set priority' command in HA determine?",
        options: ["The speed of the unit.", "The unit's eligibility to become the Primary unit (higher priority wins).", "The logging level.", "The number of users allowed."],
        correct: 1,
        explanation: "Priority is a key tie-breaker in the HA primary election process."
    },
    {
        question: "Which tool allows you to capture packets on a FortiGate for analysis in Wireshark?",
        options: ["diagnose debug flow", "diagnose sniffer packet", "get system status", "show firewall policy"],
        correct: 1,
        explanation: "The sniffer command captures raw packet data from interfaces."
    },
    {
        question: "What is 'Reverse Path Forwarding' (RPF) check?",
        options: ["A way to route backwards.", "A security feature that checks if the source IP of a packet is reachable via the interface it arrived on.", "A speed test.", "A VPN protocol."],
        correct: 1,
        explanation: "RPF helps prevent IP spoofing attacks."
    },
    {
        question: "When using 'Central NAT', where are the Virtual IPs (VIPs) configured?",
        options: ["Inside the Firewall Policy.", "In the Central DNAT (Virtual IP) table.", "In the Interface settings.", "In the Routing table."],
        correct: 1,
        explanation: "Central NAT separates destination translation (VIPs) from the security policy table."
    },
    {
        question: "Which feature allows the FortiGate to block traffic from a specific country?",
        options: ["Application Control.", "Geography-based Address Objects (GeoIP).", "Web Filter categories.", "IPS signatures."],
        correct: 1,
        explanation: "GeoIP objects allow policies to be created based on the physical location of the IP address."
    },
    {
        question: "What is the purpose of the 'Implicit Deny' policy (ID 0)?",
        options: ["To allow all traffic.", "To drop any traffic that doesn't match any other configured policy.", "To log management logins.", "To manage VPNs."],
        correct: 1,
        explanation: "Policy 0 is the catch-all that ensures only explicitly permitted traffic is allowed."
    },
    {
        question: "In IPsec, what is the 'Phase 1' negotiation responsible for?",
        options: ["Encrypting user data.", "Establishing a secure, authenticated channel between the two VPN peers.", "Defining routing.", "Assigning IP addresses."],
        correct: 1,
        explanation: "Phase 1 creates the 'Management Tunnel' used to negotiate the actual data encryption keys in Phase 2."
    },
    {
        question: "What is the benefit of 'Virtual Wire Pair' mode?",
        options: ["It provides L3 routing.", "It allows traffic to pass through two interfaces without any MAC learning or routing (Transparent L2 bridge).", "It speeds up the GUI.", "It encrypts the link."],
        correct: 1,
        explanation: "Virtual Wire Pairs are used to drop a FortiGate into an existing network without changing any IP settings."
    },
    {
        question: "Which FortiGuard service identifies the category of a website (e.g., 'Gaming' or 'Finance')?",
        options: ["Antivirus.", "Web Filtering.", "IPS.", "App Control."],
        correct: 1,
        explanation: "Web Filtering uses a global database to categorize billions of URLs."
    },
    {
        question: "What is a 'Session' in the context of the FortiGate?",
        options: ["A login attempt.", "A stateful record of a communication flow between two hosts.", "A backup file.", "A firmware version."],
        correct: 1,
        explanation: "The session table tracks the state of all active connections passing through the device."
    },
    {
        question: "Which command shows the current firmware version and hardware serial number?",
        options: ["get system status", "diagnose sys info", "show system info", "get hardware status"],
        correct: 0,
        explanation: "'get system status' is the primary command for a quick system overview."
    },
    {
        question: "What is 'Application Control' primarily used for?",
        options: ["Blocking websites.", "Identifying and controlling specific software behavior (e.g., blocking 'Facebook Chat' but allowing 'Facebook').", "Updating Windows.", "Speeding up the internet."],
        correct: 1,
        explanation: "App Control uses deep signatures to differentiate between sub-functions of an application."
    },
    {
        question: "In HA, what is the 'Override' setting used for?",
        options: ["To bypass the firewall.", "To ensure a specific unit with higher priority becomes Primary, even if its uptime is lower.", "To disable heartbeat.", "To encrypt the logs."],
        correct: 1,
        explanation: "Override changes the primary election criteria to favor Priority over Uptime."
    },
    {
        question: "Which of the following is a requirement for a successful HA cluster?",
        options: ["Different hardware models.", "Identical firmware, hardware model, and license levels.", "Different IP addresses on all ports.", "VDOMs must be disabled."],
        correct: 1,
        explanation: "HA members must be identical for stable synchronization and failover."
    },
    {
        question: "What is the 'Quarantine' feature in Antivirus used for?",
        options: ["Deleting files.", "Isolating infected hosts or files to prevent further spread.", "Encrypting data.", "Notifying the admin via SMS."],
        correct: 1,
        explanation: "Quarantine acts as a safety barrier for detected threats."
    },
    {
        question: "What does the 'LEARN' action in a firewall policy do?",
        options: ["It teaches the admin how to use the device.", "It allows traffic and logs it to help the admin identify which applications are in use before locking down the policy.", "It blocks everything.", "It downloads manuals."],
        correct: 1,
        explanation: "Learn mode is a diagnostic state for policy discovery."
    },
    {
        question: "Which protocol is used for log transmission between a FortiGate and a FortiAnalyzer?",
        options: ["HTTP.", "OFTP (over TCP 514 or 443).", "SSH.", "SNMP."],
        correct: 1,
        explanation: "OFTP is the optimized protocol for fabric-wide logging."
    },
    {
        question: "What is the purpose of 'SSL Inspection'?",
        options: ["To make SSL faster.", "To decrypt and inspect the contents of encrypted traffic (HTTPS/SMTPS) for threats.", "To block all SSL.", "To hide the user's identity."],
        correct: 1,
        explanation: "SSL Inspection provides visibility into encrypted tunnels that would otherwise hide threats."
    },
    {
        question: "Which CLI command clears all existing sessions (use with extreme caution)?",
        options: ["execute reboot", "diagnose sys session clear", "get system session kill", "purge sessions"],
        correct: 1,
        explanation: "Clearing sessions will disconnect all active users immediately."
    },
    {
        question: "What is 'FSSO' (Fortinet Single Sign-On)?",
        options: ["A password manager.", "A system that automatically identifies and authenticates network users based on their Windows AD login.", "A type of VPN.", "A licensing portal."],
        correct: 1,
        explanation: "FSSO provides a seamless user experience by removing the need for repeated logins."
    },
    {
        question: "Which SD-WAN strategy uses 'SLA Targets' to select the link?",
        options: ["Manual.", "Lowest Cost (SLA) or Best Quality.", "Maximize Bandwidth.", "Round Robin."],
        correct: 1,
        explanation: "SLA-based strategies ensure that only links meeting specific performance criteria are used."
    },
    {
        question: "What is a 'Security Fabric Root'?",
        options: ["A root user account.", "The master FortiGate that manages and visualizes the entire Security Fabric topology.", "A hardware cable.", "A license file."],
        correct: 1,
        explanation: "Every fabric must have one designated Root device."
    },
    {
        question: "Which feature allows the FortiGate to send suspicious files to a dedicated server for behavioral analysis?",
        options: ["Antivirus.", "FortiSandbox integration.", "IPS.", "App Control."],
        correct: 1,
        explanation: "Sandbox integration provides protection against zero-day and unknown threats."
    }
];

export default nse4Questions;
