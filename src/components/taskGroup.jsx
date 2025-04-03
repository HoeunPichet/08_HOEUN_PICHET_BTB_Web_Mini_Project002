import { formatDate } from "@/helper/format";
import CardComponent from "./card";

export default function TaskGroup({ data }) {
    const TK_NOT_STARTED = [];
    const TK_IN_PROGRESS = [];
    const TK_FINISHED = [];

    Array.from(data).forEach(item => {
        item.status == "NOT_STARTED" && TK_NOT_STARTED.push(item);
        item.status == "IN_PROGRESS" && TK_IN_PROGRESS.push(item);
        item.status == "FINISHED" && TK_FINISHED.push(item);
    })

    return (
        <>
            <section className="grid grid-cols-3 w-full gap-5 mt-4">
                <div className="w-full">
                    <h4 className="text-xl text-watermelon-red border-b pb-3">Not Started</h4>
                    <div className="grid w-full gap-5 mt-8">
                        {TK_NOT_STARTED && TK_NOT_STARTED.map(item => (
                            <CardComponent
                                key={item.taskId}
                                title={item.taskTitle}
                                description={item.taskDetails}
                                tag={item.tag}
                                status={item.status}
                                date={formatDate(item.endDate)}
                            />
                        ))
                        }
                    </div>
                </div>
                <div className="w-full">
                    <h4 className="text-xl text-royal-blue border-b pb-3">In Progress</h4>
                    <div className="grid w-full gap-5 mt-8">
                        {TK_IN_PROGRESS && TK_IN_PROGRESS.map(item => (
                            <CardComponent
                                key={item.taskId}
                                title={item.taskTitle}
                                description={item.taskDetails}
                                tag={item.tag}
                                status={item.status}
                                date={formatDate(item.endDate)}
                            />
                        ))
                        }
                    </div>
                </div>
                <div className="w-full">
                    <h4 className="text-xl text-persian-green border-b pb-3">Finished</h4>
                    <div className="grid w-full gap-5 mt-8">
                        {TK_FINISHED && TK_FINISHED.map(item => (
                            <CardComponent
                                key={item.taskId}
                                title={item.taskTitle}
                                description={item.taskDetails}
                                tag={item.tag}
                                status={item.status}
                                date={formatDate(item.endDate)}
                            />
                        ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}