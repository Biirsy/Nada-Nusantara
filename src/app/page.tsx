"use client";

import { useState, useEffect } from "react";
import Carousel from "@/components/carousel/carousel";
import Button from "@/components/button/button";
import Card from "@/components/card/card";
import AOS from "aos";
import "aos/dist/aos.css";
import ArticleCard from "@/components/articleCard/articleCard";
import { DefaultArticleCard } from "@/components/articleCard/articleCard.stories";
import { WithoutControls } from "@/components/carousel/carousel.stories";
import { DefaultCard } from "@/components/card/card.stories";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
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

  const heroImages = [
    {
      id: 1,
      src: "/images/bg1.jpg",
      alt: "Hero Image 1",
    },
    {
      id: 2,
      src: "/images/bg2.jpg",
      alt: "Hero Image 2",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Carousel
            {...WithoutControls.args}
            images={heroImages}
            autoPlay={true}
            interval={6000}
            showArrows={false}
            height="h-screen"
          />
        </div>
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            navbarVisible ? "bg-black bg-opacity-75" : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between px-8 py-5">
            <div className="flex items-center">
              <Image
                src="/images/logonadanusantara-w.png"
                alt="Logo"
                width={242}
                height={72}
              />
            </div>

            <div className="flex items-center space-x-7">
              <Link
                href="/"
                className="transition ease-in-out delay-50 text-white hover:text-gray-200 font-medium"
              >
                Beranda
              </Link>
              <Link
                href="/event"
                className="transition ease-in-out delay-50 text-white hover:text-gray-200 font-medium"
              >
                Event
              </Link>
              <Link
                href="/artikel"
                className="transition ease-in-out delay-50 text-white hover:text-gray-200 font-medium"
              >
                Artikel
              </Link>
            </div>

            <div>
              <Button variant="primary" size="md" radius="md">
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Event Section */}
      <div className="relative z-20 py-16 bg-white -mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              data-aos="fade-up"
            >
              Event Terbaru
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto" data-aos="fade-up">
              Temukan berbagai event menarik yang akan berlangsung
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            <Card
              {...DefaultCard.args}
              imageSrc="/images/placeholder.jpg"
              imageAlt="Teater Musik Djakarta"
              title="Teater Musik Djakarta"
              description="Nikmati keseruan teater musik di Jakarta"
              buttonText="Lihat Detail"
            />
            <Card
              {...DefaultCard.args}
              imageSrc="/images/placeholder.jpg"
              imageAlt="Traditional Dance"
              title="Traditional Dance in Yogyakarta"
              description="Nikmati keseruan tari tradisional di Yogyakarta"
              buttonText="Lihat Detail"
            />
            <Card
              {...DefaultCard.args}
              imageSrc="/images/placeholder.jpg"
              imageAlt="Wayang"
              title="Nonton Wayang Bareng di Surabaya"
              description="Nikmatilah pertunjukan wayang di Surabaya"
              buttonText="Lihat Detail"
            />
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <Button variant="primary" size="md" radius="md">
              Lihat Semua Event
            </Button>
          </div>
        </div>
      </div>
      {/* Artikel Section */}
      <div className="relative z-20 py-16 bg-white -mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              data-aos="fade-up"
            >
              Artikel Terbaru
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto" data-aos="fade-up">
              Baca berbagai artikel menarik yang telah kami sajikan
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            <ArticleCard
              {...DefaultArticleCard.args}
              id="1"
              title="Pesona Budaya: Jelajah Event Tradisional dari Sabang sampai Merauke"
              writer="Fufufafa"
              readTime={10}
              imageUrl="/images/placeholder.jpg"
              imageAlt="Teknologi Masa Depan"
              buttonText="Baca Artikel"
            />
            <ArticleCard
              {...DefaultArticleCard.args}
              id="2"
              title="Melestarikan Tradisi: Panduan Lengkap Mengenai Event Tradisional"
              writer="Fufufafa"
              readTime={12}
              imageUrl="/images/placeholder.jpg"
              imageAlt="Bisnis Online"
              buttonText="Baca Artikel"
            />
            <ArticleCard
              {...DefaultArticleCard.args}
              id="3"
              title="Mengenal Lebih Dekat: Berbagai Macam Event Tradisional di Indonesia"
              writer="Fufufafa"
              readTime={8}
              imageUrl="/images/placeholder.jpg"
              imageAlt="Memasak Tradisional"
              buttonText="Baca Artikel"
            />
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Button variant="primary" size="md" radius="md">
              Lihat Semua Artikel
            </Button>
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
