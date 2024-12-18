"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button/button";
import Card from "@/components/card/card";
import AOS from "aos";
import "aos/dist/aos.css";
import Input from "@/components/form/form";
import { DefaultCard } from "@/components/card/card.stories";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default function Event() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarVisible(true);
    } else {
      setNavbarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const router = useRouter();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-24">
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            navbarVisible ? "bg-black bg-opacity-75" : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between px-8 py-5">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={
                  navbarVisible
                    ? "/images/logonadanusantara-w.png" // Logo warna putih ketika navbar hitam
                    : "/images/logonadanusantara.png" // Logo default
                }
                alt="Logo"
                width={242}
                height={72}
              />
            </div>

            {/* Navbar Items */}
            <div className="flex items-center space-x-7">
              <Link
                href="/"
                className={`transition ease-in-out delay-50 font-medium ${
                  navbarVisible
                    ? "text-white hover:text-gray-300"
                    : "text-gray-900 hover:text-black"
                }`}
              >
                Beranda
              </Link>
              <Link
                href="/event"
                className={`transition ease-in-out delay-50 font-medium ${
                  navbarVisible
                    ? "text-white hover:text-gray-300"
                    : "text-gray-900 hover:text-black"
                }`}
              >
                Event
              </Link>
              <Link
                href="/artikel"
                className={`transition ease-in-out delay-50 font-medium ${
                  navbarVisible
                    ? "text-white hover:text-gray-300"
                    : "text-gray-900 hover:text-black"
                }`}
              >
                Artikel
              </Link>
            </div>

            {/* Button */}
            <div>
              <Button
                variant="primary"
                size="md"
                radius="md"
                className={`${navbarVisible ? "text-white border-white" : ""}`}
                onClick={() => {
                  router.push("/login");
                }}
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Event Section */}
      <div className="relative z-20 py-16 bg-white mt-2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Mau Cari Event Apa Nih?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Temukan berbagai event menarik di Nada Nusantara
            </p>
          </div>
          <div className="mt-6 w-full flex justify-center items-center mb-12">
            <div className="w-[48rem]">
              <Input
                type="text"
                placeholder="Cari event..."
                size="medium"
                borderRadius="large"
                borderColor="border-gray-300"
                variant="search"
              />
            </div>
          </div>
          <div className="mb-12">
            <div className="text-left mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Event Terbaru
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-regular">
                  Temukan berbagai event menarik yang akan berlangsung
                </p>
                <Link href="#" className="text-gray-600 text-sm">
                  Lihat Event Lainnya
                </Link>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-up"
            >
              <Card
                {...DefaultCard.args}
                imageSrc="/images/ev1.jpg"
                imageAlt="ev1"
                title="Festival Musik Tradisi Indonesia 2024"
                description="Jul 13 - 14 2024"
                buttonText="Lihat Detail"
              />
              <Card
                {...DefaultCard.args}
                imageSrc="/images/ev2.jpg"
                imageAlt="ev2"
                title="Festival Teater Tradisional Tahun 2024"
                description="Jun 23 - 29 2024"
                buttonText="Lihat Detail"
              />
              <Card
                {...DefaultCard.args}
                imageSrc="/images/ev3.jpeg"
                imageAlt="ev3"
                title="Festival Harmoni Budaya Nusantara (FHBN) 2024"
                description="Sep 5 - 7 2024"
                buttonText="Lihat Detail"
              />
            </div>
          </div>
          <div className="mb-12">
            <div className="text-left mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Rekomendasi Untuk Kamu
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-regular">
                  Kami ada beberapa rekomendasi event buat kamu nih!
                </p>
                <Link href="#" className="text-gray-600 text-sm">
                  Lihat Event Lainnya
                </Link>
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-up"
            >
              <Card
                {...DefaultCard.args}
                imageSrc="/images/ev1.jpg"
                imageAlt="ev1"
                title="Festival Musik Tradisi Indonesia 2024"
                description="Jul 13 - 14 2024"
                buttonText="Lihat Detail"
              />
              <Card
                {...DefaultCard.args}
                imageSrc="/images/ev2.jpg"
                imageAlt="ev2"
                title="Festival Teater Tradisional Tahun 2024"
                description="Jun 23 - 29 2024"
                buttonText="Lihat Detail"
              />
              <Card
                {...DefaultCard.args}
                imageSrc="/images/ev3.jpeg"
                imageAlt="ev3"
                title="Festival Harmoni Budaya Nusantara (FHBN) 2024"
                description="Sep 5 - 7 2024"
                buttonText="Lihat Detail"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}

      <footer className="bg-neutral-950">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <Image
                  src="/images/logonadanusantara-w.png"
                  alt="Logo"
                  width={242}
                  height={72}
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Menu
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Articles
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/biirsy/"
                      className="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/elonmusk"
                      className="hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                NadaNusantara™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
