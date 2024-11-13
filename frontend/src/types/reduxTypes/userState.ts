import UserModel from "../../types/modelTypes/user";

interface UserState {
    user: UserModel | null;
    status: string;
    error: string | null;
    token: string | null
}

export default UserState