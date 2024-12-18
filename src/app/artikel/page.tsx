"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button/button";
import ArticleCard from "@/components/articleCard/articleCard";
import { DefaultArticleCard } from "@/components/articleCard/articleCard.stories";
import AOS from "aos";
import "aos/dist/aos.css";
import Input from "@/components/form/form";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default function Artikel() {
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
              Mau Cari Artikel Apa Nih?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Temukan berbagai artikel terkait seni di Nada Nusantara
            </p>
          </div>
          <div className="mt-6 w-full flex justify-center items-center mb-12">
            <div className="w-[48rem]">
              <Input
                type="text"
                placeholder="Cari Artikel..."
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
                Artikel Terbaru
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-regular">
                  Berbagai artikel terbaru
                </p>
                <Link href="#" className="text-gray-600 text-sm">
                  Lihat Artikel Lainnya
                </Link>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-up"
            >
              <ArticleCard
                {...DefaultArticleCard.args}
                id="1"
                title="Cine-Concert Samsara Bakal Diboyong ke Perth pada Februari 2025"
                writer="Tia Agnes Astuti"
                readTime={5}
                imageUrl="/images/art1.jpeg"
                imageAlt="art"
                buttonText="Baca Artikel"
              />
              <ArticleCard
                {...DefaultArticleCard.args}
                id="2"
                title="Momen Taufiq Ismail-Putu Wijaya Tampil dalam Pentas Karya Sastra & Literasi di TIM"
                writer="Cicin Yulianti"
                readTime={2}
                imageUrl="/images/art2.jpeg"
                imageAlt="art"
                buttonText="Baca Artikel"
              />
              <ArticleCard
                {...DefaultArticleCard.args}
                id="3"
                title="Reog Ponorogo hingga Kebaya Diusulkan Jadi Warisan Budaya Takbenda ke UNESCO"
                writer="Tia Agnes Astuti"
                readTime={5}
                imageUrl="/images/art3.jpeg"
                imageAlt="art"
                buttonText="Baca Artikel"
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
                  Kami ada beberapa rekomendasi artikel buat kamu nih!
                </p>
                <Link href="#" className="text-gray-600 text-sm">
                  Lihat Artikel Lainnya
                </Link>
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-up"
            >
              <ArticleCard
                {...DefaultArticleCard.args}
                id="1"
                title="Cine-Concert Samsara Bakal Diboyong ke Perth pada Februari 2025"
                writer="Tia Agnes Astuti"
                readTime={5}
                imageUrl="/images/art1.jpeg"
                imageAlt="art"
                buttonText="Baca Artikel"
              />
              <ArticleCard
                {...DefaultArticleCard.args}
                id="2"
                title="Momen Taufiq Ismail-Putu Wijaya Tampil dalam Pentas Karya Sastra & Literasi di TIM"
                writer="Cicin Yulianti"
                readTime={2}
                imageUrl="/images/art2.jpeg"
                imageAlt="art"
                buttonText="Baca Artikel"
              />
              <ArticleCard
                {...DefaultArticleCard.args}
                id="3"
                title="Reog Ponorogo hingga Kebaya Diusulkan Jadi Warisan Budaya Takbenda ke UNESCO"
                writer="Tia Agnes Astuti"
                readTime={5}
                imageUrl="/images/art3.jpeg"
                imageAlt="art"
                buttonText="Baca Artikel"
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
