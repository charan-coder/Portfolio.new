"use client"

import { Linkedin, Github, Code, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function SobreMi() {
  const { t, getData } = useLanguage()
  const personalData = getData("personal")

  return (
    <section
      id="sobre-mi"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <AnimateOnScroll animation="fade-up">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mx-auto h-1 w-24 bg-blue-500 rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A passionate developer crafting digital experiences with code, design, and creativity.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="container mx-auto grid gap-12 md:grid-cols-2 items-center px-6">
        {/* Profile Image */}
        <AnimateOnScroll animation="fade-right" delay={200}>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-[4px] animate-spin-slow group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/imges/what.jpg" // ensure this image exists in public/images
                  alt={personalData.name || "Profile Image"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* About Content */}
        <AnimateOnScroll animation="fade-left" delay={400}>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <h3 className="mb-6 text-2xl sm:text-3xl font-bold dark:text-white">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Charan Singh
                </span>
              </h3>

              <div className="space-y-5">
                <div className="flex items-start space-x-3">
                  <Code className="mt-1 h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Full Stack Developer with a strong foundation in React, Next.js, Node.js and Django —
                    turning complex problems into simple, scalable solutions.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="mt-1 h-5 w-5 text-purple-500 dark:text-purple-400" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I love building interactive dashboards, sleek web apps, and digital products that
                    delight users and drive real business value.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-5 w-5 text-pink-500 dark:text-pink-400"
                  >
                    <path d="M4 10h16c.5 0 1 .5 1 1v1c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1v-1c0-.5.5-1 1-1z" />
                    <circle cx="7" cy="15" r="2" />
                    <circle cx="17" cy="15" r="2" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Outside of coding, I stay curious, constantly learning new tools & technologies to
                    push my boundaries and improve every day.
                  </p>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 rounded-xl backdrop-blur bg-white/30 dark:bg-gray-800/40 border border-gray-300 dark:border-gray-700 hover:bg-blue-500 hover:text-white transition"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/charansingh1999/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 rounded-xl backdrop-blur bg-white/30 dark:bg-gray-800/40 border border-gray-300 dark:border-gray-700 hover:bg-gray-900 hover:text-white transition"
                  asChild
                >
                  <a href="https://github.com/charan-coder" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" /> GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
