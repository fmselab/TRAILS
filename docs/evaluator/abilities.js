export var data = [
    {
        "abilityName": "Configurability",
        "abilityDescription": "The ability of the system to be configured to perform a task or reconfigured to perform different tasks. This may range from the ability to re-program the system to be able to alter the physical structure of the system (e.g. by changing a tool).",
        "abilityLevels": [
            {
                "level": 0,
                "levelName": "Static Configuration",
                "levelDescription": "The configuration files (software) or mechatronic configuration are set prior to installation and cannot be altered by the user."
            }, 
            {
                "level": 1,
                "levelName": "Start-up Configuration",
                "levelDescription": "The configuration files or the mechatronic configuration can be altered by the user prior to each task in order to customise the system in advance of each cycle of operation."
            }, 
            {
                "level": 2,
                "levelName": "User Run-time Configuration",
                "levelDescription": "The configuration, both in terms of software operating parameters or mechatronic configuration, can be altered by the user during the cycle of operation."
            }, 
            {
                "level": 3,
                "levelName": "Run-time Self Configuration",
                "levelDescription": "The system can alter its own configuration within a pre-determined set of alternative configurations designed into the system."
            }, 
            {
                "level": 4,
                "levelName": "Autonomous Configuration",
                "levelDescription": "The system can alter its own configuration in response to external factors, for example altering its morphology in response to the failure of a sensor or actuator. Note that altering configuration must be carefully distinguished from actions taken as a part of the normal autonomous operation of the system."
            }
        ]
    }, 
    {
        "abilityName": "Adaptability",
        "abilityDescription": "The ability of the system to adapt itself different work scenarios, different environments, and conditions (may also include the patient). Adaptation may take place over long or short time scales.",
        "abilityLevels": [
            {
                "level": 0,
                "levelName": "No adaptation",
                "levelDescription": "The system does not alter its operating behavior in response to experience gained over time."
            }, 
            {
                "level": 1,
                "levelName": "Recognition of the need for adaptation",
                "levelDescription": "The system recognizes the need for parameter/component/task adaptation. The system identifies the problem but does not yet know how to correct it."
            },
            {
                "level": 2,
                "levelName": "Adaptation of individual components/parameters/tasks",
                "levelDescription": "The system alters individual parameters/components/tasks in any part of the system based on assessments of performance local to the module on which the parameter operates."
            },
            {
                "level": 3,
                "levelName":"Process chain adaptation / Multiple parameters adaptation",
                "levelDescription": "The system alters several parameters/components/tasks based on the aggregate performance of a set of interconnected or closely coupled modules."
            },
            {
                "level": 4,
                "levelName": "Communicated component/parameter adaptation",
                "levelDescription": "The process of adaptation is carried out between multiple independent agents. The adaptation is communicated between agents and applied individually within each agent. Agents can be both real and simulated and of different types."
            }
        ]
    },
    {
        "abilityName": "Dependability",
        "abilityDescription": "The ability of the system to perform its given task(s) without systematic errors. Dependability specifies the level of trust that can be placed on the system to perform.",
        "abilityLevels": [
            {
                "level": 0,
                "levelName": "No dependability",
                "levelDescription": "All useful systems are dependable to some degree, even laboratory prototypes. This level exists for completeness."
            }, 
            {
                "level": 1,
                "levelName": "Mean failure dependability",
                "levelDescription": "The dependability of the system is based on the mean time to failure of its components. The dependability is based on the design of the system. The system is not itself able to increase its dependability. For Failure Dependability, this relates to the failure of all component parts of the system including software components. For Functional dependability, this relates to the frequency of failure of the system functions with respect to the task being undertaken, and for environmental dependability, it relates to the failure of the system to correctly interpret the environment. For Interaction dependability, it relates to the failure of the system to interact with a human in a functional or intuitive manner that is appropriate to the task."
            },
            {
                "level": 2,
                "levelName": "Fails Safe",
                "levelDescription": "The system design is such that there are fail-safe mechanisms built into the system that will halt the operation responsible of the failure and place the system into a safe mode when failures are detected. This includes any failures caused by in-field updates. Dependability is reduced to the ability to fail safely in a proportion of failure modes. Fail-safe dependability relies on being able to detect failure."
            },
            {
                "level": 3,
                "levelName":"Failure Recovery",
                "levelDescription": "The system is able to recover from a proportion of failures by restarting or resuming its operation."
            },
            {
                "level": 4,
                "levelName": "Graceful Degradation",
                "levelDescription": "The system is able to recognize the impact of a proportion of failures on its function and operation and is able to compensate for the effect of the failure to maintain dependable operation. Function effectiveness or the ability to achieve optimal working may be impacted."
            },
            {
                "level": 5,
                "levelName": "Task dependability",
                "levelDescription": "The system is able to recognize the impact of a failure on the overall task it is undertaking and re-task activities in order to minimize the impact of the failure on the task. This may also include self-repair as an alternative task."
            },
            {
                "level": 6,
                "levelName":"Mission dependability",
                "levelDescription": "The system is able to recognize the impact of a failure on the overall objectives of a mission and communicate the nature of the failure to other systems to minimize the impact on the mission objectives. In turn, the system is able to receive and interpret mission failures from other systems and re-task its actions to compensate."
            },
            {
                "level": 7,
                "levelName": "Predictive dependability",
                "levelDescription": "The system is able to predict that a planned future action may result in a loss of dependability, or that the effect of the partial failure of a component can be mitigated by altering future actions. Thus the system is able to extend its dependability by taking action in advance of failure in order to reduce the effect on dependability."
            }
        ]
    },
    {
        "abilityName": "Decisional Autonomy",
        "abilityDescription": "The ability of the system to act autonomously. Nearly all systems have a degree of autonomy. It ranges from a simple autonomous task (e.g., when it reacts to sensors reading) to the ability to be self-sufficient in a complex environment.",
        "abilityLevels": [
            {
                "level": 0,
                "levelName": "No autonomy",
                "levelDescription": "All systems exhibit a degree of autonomy. This level remains for consistency with other abilities."
            }, 
            {
                "level": 1,
                "levelName": "Basic action",
                "levelDescription": "A system that executes a pre-defined sequence of actions that are unaffected by the environment and makes decisions based on its current state to proceed to the next action step."
            },
            {
                "level": 2,
                "levelName": "Basic decisional autonomy",
                "levelDescription": "The system makes decisions based on basic perceptions and user input and chooses its behavior from predefined alternatives."
            },
            {
                "level": 3,
                "levelName":"Continuous basic decisional autonomy",
                "levelDescription": "The system alters the parameters of behavior in response to continuous input from perceptions or based on input control from a user interacting continuously with the system. The system may be able to override or ignore user input when certain criteria are encountered."
            },
            {
                "level": 4,
                "levelName": "Simple autonomy without environment model",
                "levelDescription": "The system uses perception to make moment-to-moment decisions about the environment and so controls interaction with the environment in order to achieve a predefined task."
            },
            {
                "level": 5,
                "levelName": "Simple autonomy with environment model",
                "levelDescription": "The system uses perception to make moment-to-moment decisions about the environment and controls interaction with the environment to achieve a predefined task. The decisions made take into account an internal model of the environment."
            },
            {
                "level": 6,
                "levelName":"Task autonomy",
                "levelDescription": "The system utilizes its perception of the environment to sequence different sub-tasks to achieve a higher-level task or mission. The events that cause behavioral changes are external and often unpredictable."
            },
            {
                "level": 7,
                "levelName": "Constrained task autonomy",
                "levelDescription": "The system adapts its behavior to accommodate task constraints. These might be negative impacts in terms of failed sensors, or the need to optimize power utilization or other physical resources the process depends on, (water, chemical agents, etc). Alternatively, these might be constraints imposed by sensing ability, the environment, or the user."
            },
            {
                "level": 8,
                "levelName": "Multiple task autonomy",
                "levelDescription": "The system chooses between multiple high-level tasks and can alter its strategy as it gathers new knowledge about the environment. The system will also take into account resource limitations and attempts to overcome them."
            },
            {
                "level": 9,
                "levelName": "Dynamic autonomy",
                "levelDescription": "The system is able to alter its decisions about actions (sub-tasks) within the time frame of dynamic events that occur in the environment so that the execution of the task remains optimal to some degree."
            },
            {
                "level": 10,
                "levelName": "Mission oriented autonomy",
                "levelDescription": "The system is able to dynamically alter its tasking both within and between several high-level tasks in response to dynamic real-time events in the environment."
            },
            {
                "level": 11,
                "levelName": "Distributed autonomy",
                "levelDescription": "The source for task and mission decisions can originate from outside of the system. The system is able to balance requests for action with its own tasking and mission priorities and can similarly communicate requests for action."
            }
        ]
    }
]