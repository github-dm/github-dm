import type { FirebaseOptions } from "firebase/app";
import type { UserCredential } from "firebase/auth";

type ModuleFactory<T extends object> = (config: FirebaseOptions) => T;

export type AuthModuleFactory = ModuleFactory<{
  signIn(): Promise<UserCredential>;
}>;
