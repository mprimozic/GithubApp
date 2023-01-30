import { IRepo } from "../interfaces/IRepo"
import { IUser } from "../interfaces/IUser"

export type TAppState = {
    showTable: boolean;
    user: IUser,
    repo: Array<IRepo>
}