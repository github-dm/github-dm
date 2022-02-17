import { createAuthModule } from "@github-dm/firebase";
import firebaseConfig from "../common/firebaseConfig";

const AuthModule = createAuthModule(firebaseConfig);
export default AuthModule;
