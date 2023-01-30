import { IRepo } from "../interfaces/IRepo"
import { IUser } from "../interfaces/IUser"

export type TTable = {
    user: IUser,
    repo: Array<IRepo>,
    handleClick: any

}