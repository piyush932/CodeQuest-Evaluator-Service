import { Job } from "bullmq";

import { Ijob } from "../types/bullMqJobDefinition";

export class SampleJob implements Ijob{
    name: string;
    payload?: Record<string, unknown> | undefined;
    constructor(name:string,payload:Record<string,unknown>){
        this.name = this.constructor.name;
        this.payload = payload;
    }
    handle = () => {
        console.log("Handler of the job called");
    };
    failed = (job?:Job) => {
        console.log("Job failed");
        if(job){
            console.log("Job id",job.id);
        }
    };


}