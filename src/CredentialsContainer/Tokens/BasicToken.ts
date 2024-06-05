import { TokenType } from "../Enums";
import type { IToken, BasicTokenOptions, JSONTokenFormat } from "../Types";

export class BasicToken implements IToken {
    private username: string;
    private password: string;

    constructor(options: BasicTokenOptions) {
        this.username = options.username
        this.password = options.password
    }

    toJSON(): JSONTokenFormat<BasicTokenOptions> {
        return {
            type: TokenType.Basic,
            data: {
                username: this.username,
                password: this.password
            }
        }
    }

    toString() {
        const payload = `${this.username}:${this.password}`
        const token = Buffer.from(payload).toString('base64')
        return `${TokenType.Basic} ${token}`
    }
}
