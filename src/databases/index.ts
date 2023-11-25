import mongoose, { ConnectOptions } from "mongoose";
import { configs } from "../configs";
import logger from "~/utils/logger";

export function connectMongo(onSuccess: () => void): void {
    const connectionUri = configs.mongo.getUri();
    mongoose.set("strictQuery", false);
    mongoose
        .connect(connectionUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)
        .then(() => {
            logger.info("Connected to mongo");
            onSuccess();
        })
        .catch((err) => {
            logger.error("%O", err);
        });
}

export function connectedToMongo(): boolean {
    return mongoose.connection.readyState === 1;
}
