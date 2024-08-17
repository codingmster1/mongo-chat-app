 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Background from "../../assets/login2.png";
 import Victory from "../../assets/robot_logo.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleLogin = async => {};

    const handleSignup = async => {};


   return (
     <div className="h-[100vh] w-[100vw] flex items-center justify-center">
        <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vh] md:w-[90vw] lg:w-[70vw] xl:w-[60vw]rounded-3xl grid xl:grid-cols-2">
<div className="flex flex-col gap-10 items-center justify-center">
    <div className="flex items-center justify-center flex-col">
<div className="flex items-center justify-center">
    <h1 className="text-5xl font-bold med:text-6xl">Welcome</h1>
    <img src={Victory} alt="" className="h-[100px]"/>
    <p className="font-medium text-center">Fill in the details to get started</p>
</div>
<div className="flex items-center justify-center w-full">
<Tabs className="w-3/4">
    <TabsList className="bg-transparent rounded-none w-full flex">
        <TabsTrigger value="login"
        className="data-[state=active]:bg-transparent
        text-black text-opacity-90 border-b-2
        rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
        >Login</TabsTrigger>
        <TabsTrigger 
        value="signup"
       className="data-[state=active]:bg-transparent
       text-black text-opacity-90 border-b-2
       rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
        >Sign Up</TabsTrigger>
    </TabsList>
    <TabsContent className="flex flex-col gap-5 mt-10" value="login">
<Input
placeholder="email"
type="email"
className="rounded-full p-6"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<Input
placeholder="password"
type="password"
className="rounded-full p-6"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<Button
className="rounded-full p-6" onClick={handleLogin}
>Login</Button>
    </TabsContent>
    <TabsContent className="flex flex-col gap-5" value="signup">
    <Input
placeholder="email"
type="email"
className="rounded-full p-6"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<Input
placeholder="password"
type="password"
className="rounded-full p-6"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<Input
placeholder="Confirm Password"
type="password"
className="rounded-full p-6"
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
/>
<Button
className="rounded-full p-6" onClick={handleSignup}
>Sign Up</Button>
    </TabsContent>
</Tabs>
</div>
    </div>
</div>
     </div>
     </div>
   );
 }
 
 export default Auth