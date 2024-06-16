import { v4 as uuidv4 } from 'uuid';

interface UserSchema {
    name: string;
    email: string;
    password: string;
}

export class User {
    private props: UserSchema;
    private _id: string;

    constructor(props: UserSchema, id?: string) {
        this.props = props;
        this._id = id || uuidv4();
    }

    get id(): string {
        return this._id;
    }

    get email(): string {
        return this.props.email;
    }

    set email(email: string) {
        this.props.email = email;
    }

    get password(): string {
        return this.props.password;
    }

    set password(password: string) {
        this.props.password = password;
    }

    get name(): string {
        return this.props.name;
    }

    set name(name: string) {
        this.props.name = name;
    }
}
