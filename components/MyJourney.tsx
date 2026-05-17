type MyJourneyProps = {
    step: number;
    content: string;
    status: "Completed" | "In Progress" | "Planned"; 
};

export function MyJourney({ step, content, status }: MyJourneyProps)
{
    return (
        <div className="mb-4 rounded-lg border p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold">Step {step}</h3>
            <p className="mb-1 text-sm text-gray-600">{content}</p>
            <p className={`text-xs font-medium ${
                status === "Completed" ? "text-green-500" :
                status === "In Progress" ? "text-yellow-500" :
                "text-gray-500"
            }`}>{status}</p>
        </div>
    );
}
