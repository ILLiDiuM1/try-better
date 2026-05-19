type JourneyProps = {
    step: number;
    content: string;
    status: "Completed" | "In Progress" | "Planned"; 
}

export const journey: JourneyProps[] = [
    {
        step: 1,
        content: "Started learning JavaScript React",
        status: "Completed"
    },
    {
        step: 2,
        content: "Start build first simple website",
        status: "Completed"
    },
    {
        step: 3,
        content: "Learned Git & GitHub",
        status: "In Progress"
    },
    {
        step: 4,
        content: "Complede website",
        status: "Planned"
    }
];  