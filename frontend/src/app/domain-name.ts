import {environment} from "../environments/environment";

export const domainName = environment.production ? "" : "http://localhost:8090";
