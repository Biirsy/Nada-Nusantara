"use client";

import React from "react";
import Input from "@/components/form/form";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      {/* Bagian Kiri: Form Login */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-16">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-1">Selamat Datang</h2>
            <p className="text-gray-500">
              Jelajahi Berbagai Event Tradisional Melalui Website Kami
            </p>
          </div>

          {/* Form Input */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <Input
              placeholder="Masukkan Email Anda"
              type="text"
              size="medium"
              borderRadius="medium"
              borderColor="border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Kata Sandi</label>
            <Input
              placeholder="******"
              type="password"
              size="medium"
              borderRadius="medium"
              borderColor="border-gray-300"
            />
          </div>

          {/* Checkbox dan Lupa Password */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Ingat Saya
              </label>
            </div>
            <a
              href="#"
              className="text-blue-500 text-sm hover:text-blue-700 transition duration-300"
            >
              Lupa Kata Sandi
            </a>
          </div>

          {/* Tombol Login */}
          <div className="mb-7">
            <Button
              variant="primary"
              size="md"
              radius="md"
              className="w-full text-regular text-medium"
              onClick={() => {
                router.push("/");
              }}
            >
              Masuk
            </Button>
          </div>

          {/* Daftar Sekarang */}
          <p className="text-center text-sm text-gray-500">
            Tidak Punya Akun?{" "}
            <a
              href="/register"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              Daftar Sekarang
            </a>
          </p>
        </div>
      </div>

      {/* Bagian Kanan: Gambar */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/login.jpg')",
        }}
      ></div>
    </div>
  );
}
