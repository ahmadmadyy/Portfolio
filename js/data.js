// ─────────────────────────────────────────────
//  Projects
// ─────────────────────────────────────────────
const P = [
  {
    t: "Humanoid & AGV Fleet Management",
    d: "Fleet control for humanoid G1 robots and AGVs using VDA 5050, SIMOVE Fleet Manager.",
    img: "https://media.giphy.com/media/QNFhOolVeCzPQ2Mx85/giphy.gif",
    video: "videos/fleet.mp4",
    tags: ["SIMOVE", "VDA 5050"],
    r: "Siemens AG",
    fd: "Designed and deployed a multi-robot fleet control architecture coordinating Unitree G1 humanoid robots and AGVs. Uses VDA 5050 for standardized communication, Siemens SIMOVE for orchestration, and C++ navigation logic in Siemens Closed-Loop Integration Framework.",
    ft: [
      "Multi-robot fleet coordination with VDA 5050",
      "C++ navigation logic in Siemens CLIF framework",
      "Real-world testing on humanoid G1 and AGV platforms",
      "Heterogeneous robot task allocation"
    ]
  },
  {
    t: "3D Localization Benchmarking",
    d: "Compared MOLA, RTAB-Map, GLIM, KISS-SLAM, and FAST-LIO for 3D localization on humanoid platforms.",
    img: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    video: "videos/3d_loc_mobile3.mp4",
    tags: ["SLAM", "GLIM", "KISS-SLAM", "RTAB-Map"],
    r: "Siemens AG",
    fd: "Systematic benchmarking of five 3D SLAM methods for humanoid robot deployment. Evaluated accuracy, drift, and computational efficiency using real sensor data from humanoid platforms with 3D LiDAR and IMU.",
    ft: [
      "Benchmarked 5 SLAM methods on real robot data",
      "KPIs: accuracy, drift rate, compute load",
      "3D LiDAR and IMU sensor suites on humanoid robots",
      "Iterated tuning for sensor noise and environment",
      "Documented for team-wide deployment decisions"
    ]
  },
  {
    t: "Exploration of Multimodal Reasoning and Explainability for Robotic Manipulation in Physical AI",
    d: "Language-to-motion pipeline using NVIDIA Cosmos LLM for UR5 manipulation with MoveIt 2 in Isaac Sim.",
    img: "https://media.giphy.com/media/l0HlNQ03J5JR3qp9S/giphy.gif",
    video: "videos/Thesis%20vid.mp4",
    gh: "https://github.com/ahmadmadyy/ros2_ws",
    tags: ["UR5", "Cosmos", "MoveIt 2", "Isaac Sim"],
    r: "Fraunhofer IGCV - Master Thesis",
    fd: "Complete language-to-motion pipeline converting natural language to executable UR5 robot actions. NVIDIA Cosmos for task planning, generating waypoints from text. Implemented in Isaac Sim with MoveIt 2 for pick-and-place and screwing. Compared with RL baselines.",
    ft: [
      "NVIDIA Cosmos LLM for task planning from text",
      "Text-to-waypoint pipeline for executable actions",
      "UR5 pick-and-place and screwing in Isaac Sim",
      "MoveIt 2 for motion planning and collision avoidance",
      "RL baseline comparison with LLM-based evaluation"
    ]
  },
  {
    t: "ROS 2 CANopen Hardware Interface",
    d: "Embedded C++ ROS 2 Control hardware interface with CANopen for marine steering and propulsion.",
    img: "https://media.giphy.com/media/3oKIPnAiaMCJ8dO796/giphy.gif",
    video: "videos/lemvos.MOV",
    tags: ["C++", "CANopen", "ROS 2 Control"],
    r: "Lemvos Robotics",
    fd: "ROS 2 Control hardware interface plugin implementing CANopen for marine systems. Bridges embedded motor control with ROS 2, running on Jetson Orin with Docker.",
    ft: [
      "ROS 2 Control plugin for CANopen",
      "Motor control over CAN bus",
      "Real-time actuator feedback",
      "Deployed on Jetson Orin + Docker",
      "Hardware-in-the-loop testing"
    ]
  },
  {
    t: "UR3e Pick-and-Place with Object Detection",
    d: "ROS 2 pick-and-place using MoveIt 2 and UR3e with integrated object detection.",
    img: "https://media.giphy.com/media/l0HlNQ03J5JR3qp9S/giphy.gif",
    video: "videos/pick_ur3e.mp4",
    gh: "https://github.com/ahmadmadyy/UR3e-Pick-and-Place-",
    tags: ["ROS 2", "MoveIt 2", "C++", "UR3e"],
    r: "Personal Project",
    fd: "Complete ROS 2 pick-and-place system for UR3e. MoveIt 2 motion planning with object detection for target identification. Full pick-and-place cycles with collision-aware planning.",
    ft: [
      "MoveIt 2 planning with collision avoidance",
      "Object detection for target identification",
      "Full cycle: approach, grasp, lift, place",
      "C++ with ROS 2 action interfaces",
      "Configurable workspace and grasp params"
    ]
  },
  {
    t: "6 DOF Warehouse Robot",
    d: "6-DOF industrial arm with MoveIt 2 for pick-and-place on warehouse assembly lines.",
    img: "pictures/6dofrobot.png",
    tags: ["ROS 2", "Moveit2", "ROS2 Control", "C++"],
    r: "Robotics Corner",
    fd: "Developed motion planning and control for a 6-DOF robotic arm deployed in a warehouse assembly line. Integrated MoveIt 2 for collision-aware pick-and-place, ROS 2 Control for hardware abstraction, and Gazebo for simulation. Built URDF models and configured planning pipelines for reliable part handling in structured environments.",
    ft: [
      "MoveIt 2 motion planning with collision avoidance",
      "ROS 2 Control hardware interface",
      "URDF modeling and Gazebo simulation",
      "Pick-and-place pipeline for assembly line tasks",
      "C++ nodes for real-time control"
    ]
  },
  {
    t: "Autonomous Warehouse Robot",
    d: "Autonomous mobile robot with EKF sensor fusion, SLAM, AMCL, path planning, and Behavior Trees.",
    img: "pictures/warehouse.webp",
    tags: ["ROS 2", "EKF", "SLAM", "BTs"],
    r: "Robotics Corner",
    fd: "Complete self-driving robot stack: ROS 2 Control hardware abstraction, EKF sensor fusion (LiDAR + IMU + odometry), SLAM mapping, AMCL localization, Nav2 planning, Behavior Trees for mission control.",
    ft: [
      "ROS 2 Control hardware interface",
      "EKF: LiDAR + IMU + wheel odometry",
      "SLAM + AMCL localization",
      "Dijkstra/A* with Pure Pursuit local planner",
      "Behavior Trees for mission orchestration"
    ]
  },
  {
    t: "Autonomous Wall-Following Robot",
    d: "ROS 2 reactive wall-following using publishers, services, and actions in C++.",
    img: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    video: "videos/wall_follow.mp4",
    gh: "https://github.com/ahmadmadyy/Autonomous-Wall-Following-Robot",
    tags: ["ROS 2", "C++", "Reactive"],
    r: "Personal Project",
    fd: "ROS 2 wall-following robot demonstrating core communication patterns. Uses laser scan data for reactive wall following in C++.",
    ft: [
      "Wall detection with laser scan data",
      "ROS 2 pub/sub, services, actions",
      "Reactive control algorithm",
      "C++ best practices",
      "Gazebo + TurtleBot3 simulation"
    ]
  },
  {
    t: "Pick-and-Place Robot (Embedded)",
    d: "4-DOF manipulator with embedded C++, servo control, Bluetooth, USART, I2C OLED.",
    img: "https://media.giphy.com/media/LaVp0AyqR5bGsC5Cbm/giphy.gif",
    video: "videos/Embedded_robot.mp4",
    gh: "https://github.com/ahmadmadyy/Pick-n-Place-Robot",
    tags: ["Embedded C++", "Servos", "Bluetooth"],
    r: "Personal Project",
    fd: "4-DOF robotic arm with embedded C++ firmware. Servo control, Bluetooth wireless operation, USART debugging, timer-based PWM, I2C OLED display. Mobile app controlled.",
    ft: [
      "4-DOF arm kinematics",
      "Bluetooth HC-05 wireless control",
      "USART debugging interface",
      "Timer-based PWM for servos",
      "I2C OLED status display"
    ]
  },
  {
    t: "Bicopter Balancing",
    d: "Camera-based bicopter on Raspberry Pi 4 using computer vision and PID control to balance a beam by actuating two BLDC motors.",
    img: "https://media.giphy.com/media/3oKIPnAiaMCJ8dO796/giphy.gif",
    video: "videos/bicopter.mp4",
    gh: "https://github.com/ahmadmadyy/Bicopter-Balancing",
    tags: ["Raspberry Pi", "Computer Vision", "PID", "Python"],
    r: "Personal Project",
    fd: "A bicopter that uses a camera sensor and a computer vision algorithm in Python on an embedded Raspberry Pi 4 to balance a beam horizontally by actuating 2 BLDC motors. Includes hardware design (SolidWorks), open-loop image processing tests, and closed-loop PID control on the Pi.",
    ft: [
      "Raspberry Pi 4 embedded control",
      "Computer vision-based beam angle estimation",
      "PID control of dual BLDC motors",
      "SolidWorks hardware design and assembly",
      "Closed-loop testing and tuning"
    ]
  },
  {
    t: "CartPole Balancing with RL",
    d: "Reinforcement learning on OpenAI's CartPole environment using a Deep Q-Network (DQN) agent.",
    img: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    video: "videos/cartpole.mp4",
    gh: "https://github.com/ahmadmadyy/CartPole-Balancing",
    tags: ["Reinforcement Learning", "DQN", "OpenAI Gym", "Python"],
    r: "Personal Project",
    fd: "Trained a Deep Q-Network (DQN) agent to balance OpenAI's CartPole environment. Implemented training and testing pipelines in Jupyter notebooks, with epsilon-greedy exploration and reward tracking. Saved and deployed the trained agent for inference.",
    ft: [
      "DQN (Deep Q-Network) implementation",
      "OpenAI Gym CartPole environment",
      "Epsilon-greedy exploration strategy",
      "Training and evaluation notebooks",
      "Saved model deployment (trained_agent.h5)"
    ]
  },
  {
    t: "Autonomous Vehicle",
    d: "PID, Stanley & Pure-Pursuit lateral controllers, obstacle avoidance, and lane keeping.",
    img: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    video: "videos/autonomous.mp4",
    gh: "https://github.com/ahmadmadyy/Autonomous-Car",
    tags: ["ROS", "PID", "Stanley", "Pure Pursuit"],
    r: "MRS Research Group — GUC",
    fd: "Autonomous vehicle with multiple lateral control algorithms. Compared PID, Stanley, and Pure Pursuit for path tracking with obstacle avoidance and lane keeping.",
    ft: [
      "PID, Stanley, Pure Pursuit comparison",
      "Sensor-based obstacle avoidance",
      "Camera-based lane keeping",
      "ROS integration",
      "Control algorithm evaluation"
    ]
  }
];

// ─────────────────────────────────────────────
//  Certifications
// ─────────────────────────────────────────────
const CERTS = [
  {
    name: "Generative AI with Large Language Models",
    issuer: "Amazon Web Services",
    date: "Issued Oct 2025",
    credId: "0B9CKOLGQ1FI",
    img: "certifications/generative-ai-llm.jpeg",
    url: "https://www.coursera.org/account/accomplishments/verify/0B9CKOLGQ1FI",
    desc: "Explored the fundamentals of generative AI, covering the LLM lifecycle from data gathering to deployment. Studied transformer architectures, fine-tuning techniques, and empirical scaling laws. Applied reinforcement learning from human feedback (RLHF) to align model outputs with human preferences.",
    skills: ["Model Evaluation", "Generative AI", "Machine Learning", "Python", "Reinforcement Learning", "LLM Application", "Applied ML", "Generative Model Architectures", "Model Deployment", "NLP", "Large Language Modeling", "Prompt Engineering"]
  },
  {
    name: "Convolutional Neural Networks",
    issuer: "DeepLearning.AI",
    date: "Issued Jun 2024",
    credId: "EWF4QFVYAHKE",
    img: "certifications/convolutional-neural-networks.jpeg",
    url: "https://www.coursera.org/account/accomplishments/verify/EWF4QFVYAHKE",
    desc: "Studied convolutional neural network architectures and applied them to visual detection, recognition, and neural style transfer tasks. Gained hands-on experience building and training deep learning models for computer vision applications.",
    skills: ["Deep Learning", "Data Preprocessing", "TensorFlow", "PyTorch", "Transfer Learning", "CNNs", "Keras", "ANNs", "Computer Vision", "Image Analysis"]
  },
  {
    name: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "Issued Nov 2023",
    credId: null,
    img: "certifications/mckinsey-forward.jpeg",
    badge: true,
    url: "https://www.credly.com/badges/36c6d5b9-e6d8-4860-bfcc-610e772ad359/linked_in_profile",
    desc: "Completed a 10-week digital learning program focused on building core professional capabilities. Covered structured problem solving, communication for impact, digital and AI essentials, and adaptability and resilience in fast-changing environments.",
    skills: ["Problem Solving", "Communication for Impact", "Digital & AI Essentials", "Adaptability & Resilience"]
  },
  {
    name: "ISTQB® Foundation Level",
    issuer: "ISTQB® — International Software Testing Qualifications Board",
    date: "Issued Sep 2023",
    credId: "230919017",
    img: "certifications/istqb.png",
    url: "https://scr.istqb.org/?name=Ahmed+Khaled+Mady&number=230919017&orderBy=relevancy&orderDirection=&dateStart=&dateEnd=&expiryStart=&expiryEnd=&certificationBody=&examProvider=&certificationLevel=&country=",
    desc: "Earned the CTFL v4.0 certification covering foundational software testing principles. Studied testing throughout the software development lifecycle, static testing techniques, test analysis and design, managing test activities, and test tools.",
    skills: ["Fundamentals of Testing", "Testing Throughout SDLC", "Static Testing", "Test Analysis & Design", "Managing Test Activities", "Test Tools"]
  },
  {
    name: "Embedded Systems",
    issuer: "AMIT Learning",
    date: "Issued 2022",
    credId: null,
    img: "certifications/embedded.png",
    url: null,
    desc: "Completed a comprehensive embedded systems program covering low-level programming in C and modern C++, microcontroller interfacing with STM32 and Atmel ATmega32, and embedded toolchains. Studied RTOS concepts, automotive bus technologies, SOLID principles, design patterns, and DevOps with Jenkins. Also covered Embedded Linux with Yocto, concurrency in C++, socket programming, and AUTOSAR fundamentals.",
    skills: ["C", "Modern C++", "STM32", "ATmega32", "Embedded C", "RTOS", "AUTOSAR", "Embedded Linux", "Yocto", "Jenkins", "SOLID Principles", "Design Patterns", "Socket Programming", "Concurrency"]
  }
];

// ─────────────────────────────────────────────
//  Blog Posts
// ─────────────────────────────────────────────
const BLOGS = [
  {
    t: "Master's Thesis Defense – Multimodal Reasoning for Robotic Manipulation",
    dt: "FAU FAPS · Fraunhofer IGCV",
    img: "pictures/def_1.jpeg",
    gallery: [
      "pictures/def_1.jpeg",
      "pictures/def_2.jpeg",
      "pictures/def_3.jpeg"
    ],
    tags: ["Physical AI", "LLM", "Robotics", "Isaac Sim", "MoveIt 2"],
    content: `<p>I'm thrilled to share that I have successfully defended my Master's thesis at the <strong>FAU FAPS Institute</strong> in cooperation with <strong>Fraunhofer IGCV</strong>!</p><p>The thesis, titled <em>"Exploration of Multimodal Reasoning and Explainability for Robotic Manipulation in Physical AI"</em>, presents a complete language-to-motion pipeline that converts natural language instructions into executable actions for a UR5 robot — bridging the gap between high-level human intent and low-level robotic execution.</p><p><strong>Key Technical Contributions:</strong></p><ul style="margin:1rem 0 1rem 1.5rem;color:var(--t2);line-height:2"><li>NVIDIA Cosmos LLM for task planning directly from natural language text</li><li>Text-to-waypoint pipeline generating structured, executable robot trajectories</li><li>UR5 pick-and-place and screwing tasks implemented in NVIDIA Isaac Sim</li><li>MoveIt 2 for motion planning and real-time collision avoidance</li><li>Comparative evaluation against reinforcement learning baselines using LLM-based assessment</li></ul><p>This work explores how large multimodal models can serve as task planners in physical AI systems, enabling robots to interpret and act on unstructured language commands in simulation environments. The pipeline demonstrated promising results in both manipulation accuracy and task generalization.</p><p>I'm deeply grateful to my supervisors at FAU FAPS and Fraunhofer IGCV for their guidance and support throughout this journey. This thesis marks an exciting milestone and I look forward to continuing research at the intersection of language models and robotic systems.</p>`
  },
  {
    t: "Master's Seminar: MPC for Multi-Agent Cooperative Vehicles",
    dt: "FAU Erlangen-Nürnberg",
    img: "pictures/seminar2.jpeg",
    tags: ["MPC", "Autonomous Driving", "Multi-Agent Systems"],
    content: `<p>I'm happy to share that I successfully presented my master's seminar on Model Predictive Control (MPC) for Multi-Agent Cooperative Vehicles in Autonomous Driving, with a focus on the challenging problem of intersection management.</p><p>In this seminar, I explored decentralized MPC approaches for coordinating autonomous vehicles at intersections without relying on centralized traffic control. The work was mainly inspired by two research papers:</p><ul style="margin:1rem 0 1rem 1.5rem;color:var(--t2);line-height:2"><li>Decentralized Intersection Management of Autonomous Vehicles Using Nonlinear MPC</li><li>Multi-Intersection Traffic Signal Control: A Decentralized MPC-Based Approach</li></ul><p>These approaches show how decentralized MPC can improve traffic flow, safety, and efficiency by allowing autonomous vehicles to coordinate their motion and decisions in a cooperative way.</p><p>This seminar was an important step in my master's journey at FAU Erlangen-Nürnberg and gave me the opportunity to dive deeper into optimal control, autonomous driving, and multi-agent systems.</p><p>I'm grateful to everyone who supported and guided me throughout this work, and I'm excited to continue working on autonomous systems, robotics, and intelligent mobility in the future.</p>`
  },
  {
    t: "Technoxian Egypt Competition – Judging Experience",
    dt: "IVY STEM International Schools",
    img: "pictures/technoxian/1.jpeg",
    thumbPos: "center 30%",
    modalImgPos: "center 22%",
    gallery: [
      "pictures/technoxian/1.jpeg",
      "pictures/technoxian/2.jpeg",
      "pictures/technoxian/3.jpeg",
      "pictures/technoxian/4.jpeg",
      "pictures/technoxian/5.jpeg",
      "pictures/technoxian/6.jpeg"
    ],
    tags: ["Robotics", "Competition", "Judging"],
    content: `<p>I'm happy to share my recent experience as a judge at Technoxian Egypt, an amazing competition focused on robotics, coding, and innovation. The event was hosted at IVY STEM International Schools and organized by STEM Zone, and it was a great platform to see the creativity, technical skills, and teamwork of young students.</p><p>This was my first time judging a competition like this, and it was both exciting and challenging at the same time. I had the opportunity to evaluate projects in the RoboSoccer and Innovation categories, and I was genuinely impressed by the ideas, effort, and creativity of the participants. Judging was not easy because many of the teams presented very strong projects, and the level of enthusiasm and passion from the students was truly inspiring.</p><p>Seeing how motivated and innovative these students were reminded me how much potential the next generation has in robotics and technology.</p><p>I would like to thank everyone who helped organize and run this event. Special thanks to my fellow judges Mohammad Eissa and Mahmoud Morsy for the great collaboration and discussions, and a special appreciation to Awab Mahmod, the Technical Manager, for his hard work and support throughout the event.</p><p>It was an honor to be part of this experience, and I'm looking forward to participating again in future events.</p>`
  },
  {
    t: "Pick-and-Place Robot Project – Video Presentation",
    dt: "Embedded Robotics",
    img: "https://img.youtube.com/vi/2Al0uzsw1Gk/hqdefault.jpg",
    ytEmbed: "https://www.youtube.com/embed/2Al0uzsw1Gk",
    tags: ["Embedded", "Robotics", "Pick-and-Place", "Motor Control"],
    content: `<p>I recently had the opportunity to present my embedded systems project to a group of young learners.</p><p>In this project, I developed a pick-and-place robotic system as part of my embedded systems and robotics work. The goal was to design a robot that can automatically pick up an object from one location and place it in another using programmed motion sequences and control logic.</p><p>I worked on the embedded software, motor control, and system integration, making sure the robot could move accurately and repeat the pick-and-place task reliably. This involved working with microcontrollers, motor drivers, sensors, and control algorithms to coordinate the robot's motion and gripper operation.</p><p>To document the project, I recorded a video where I explained the system design, hardware components, control logic, and how the robot performs the full pick-and-place sequence. In the video, I also discussed some of the challenges I faced, such as motion accuracy, timing between motors and the gripper, and debugging communication between the embedded components.</p><p>This project was important for me because it combined embedded systems, control, and robotics into one complete system. It helped me better understand how robotic systems are built from the hardware level up to the control software, and how different components must work together to achieve a reliable autonomous task.</p><p>This project represents one of my early hands-on robotics projects and helped build my foundation in embedded robotics, motor control, and system integration.</p>`
  },
  {
    t: "Bicopter Balancing",
    dt: "GUC University Project",
    img: "https://img.youtube.com/vi/YK3XTx7IMPE/hqdefault.jpg",
    ytEmbed: "https://www.youtube.com/embed/YK3XTx7IMPE",
    tags: ["Computer Vision", "PID", "Control", "Python"],
    content: `<p>During my university studies, I worked on a project titled &quot;Bicopter Balancing,&quot; where I designed and implemented a vision-based control system to balance a bicopter beam using embedded hardware and feedback control. At the end of the project, I presented the work in front of my peers and professors, explaining the problem setup, hardware and software architecture, and the control strategies used to achieve stable balancing.</p><p>The goal of the project was to build a low-cost aero-mechatronic system that can balance a horizontal beam by actuating two BLDC motors based on real-time visual feedback. This setup demonstrates how embedded computation, computer vision, and control theory can be combined to solve a challenging nonlinear stabilization problem in practice.</p><p>The hardware consists of two BLDC motors driving a horizontal beam, each connected to an electronic speed controller (ESC) that interfaces with a Raspberry Pi 4. A USB webcam mounted in the setup provides continuous visual feedback of the beam, which is processed on the Raspberry Pi using Python and computer vision techniques to estimate the beam angle and deviation from the horizontal position.</p><p>On the software side, I implemented image processing pipelines in Python to detect the beam and extract its orientation from camera frames, then used this measurement as feedback in a closed-loop controller running on the Raspberry Pi. In the open-loop tests, I focused on validating the vision pipeline and understanding the system&rsquo;s dynamic response, while in the closed-loop phase I implemented and tuned a PID controller that adjusts motor speeds to minimize the beam angle error.</p><p>The repository includes the full hardware design in SolidWorks (all parts and assemblies), code for open-loop image processing experiments, and the closed-loop control implementation on the Raspberry Pi, as well as a detailed project report documenting the modeling, experiments, and results. Through this project I strengthened my understanding of feedback control, PID tuning, embedded Python development, computer vision for control, and practical mechatronic system integration, and the final presentation significantly improved my ability to explain control architectures and engineering trade-offs to a technical audience.</p>`
  }
];
