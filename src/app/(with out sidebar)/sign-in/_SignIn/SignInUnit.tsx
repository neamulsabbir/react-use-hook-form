"use client";

import { FormInput } from "@/components/atomic";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export const SignInUnit = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => console.log(data);
	return (
		<form className="bg-default" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex items-center h-full">
				<div className="bg-white rounded-2xl p-16 w-2/5 mx-auto">
					<div className="flex flex-col items-center">
						<Link href="/">
							<Image src="/images/logo.png" width={170} height={37} alt="Logo" />
						</Link>
					</div>

					<p className="text-deepGrey mt-12 mb-8">
						Don&apos;t have an account? <span className="text-primary">Sign up</span>
					</p>

					<p className="text-[16px] font-medium">Sign In</p>

					<FormInput label="Email" {...register("email")} />
					<div className="mb-4">
						<FormInput label="Password" {...register("password")} />
					</div>

					<Link href="#">
						<p className="text-primary">Forget Password</p>
					</Link>

					<Button type="submit" fullWidth className="hover:bg-primary mt-4">
						Submit
					</Button>
				</div>
			</div>
		</form>
	);
};
