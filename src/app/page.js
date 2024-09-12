"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return <div>{router.push("/home")}</div>;
}
