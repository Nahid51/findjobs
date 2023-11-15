"use client"
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const ApplicantRoute = (WrappedComponent) => {
    const router = useRouter();
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!user.email) {
        router.push("/login-page")
    }

    return children;
};

export default ApplicantRoute;