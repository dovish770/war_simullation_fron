    import IOrganization from "./organization";

    interface IUser {
        _id?:string
        username: string;
        password: string;
        organization: IOrganization;
        isDefence:boolean
    }

    export default IUser