import { compareSync } from 'bcrypt';

export class ComparePassword {
    async comparePass(password: string, user_pass: string) {
        try {
            const match = compareSync(password, user_pass);
            return match;
        } catch (e) {
            throw e;
        }
    }
}