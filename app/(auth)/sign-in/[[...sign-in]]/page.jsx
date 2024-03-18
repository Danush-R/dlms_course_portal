import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            src="/login.png" width={600} height={1000}
            class="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div class="hidden lg:relative lg:block lg:p-12">
            <a class="block text-white" href="#">
              <span class="sr-only">Home</span>
              <svg
                class="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
               
              </svg>
            </a>

            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">

              Welcome to Danush LMS 🎓
            </h2>

            <p class="mt-4 leading-relaxed text-white/90">
            Welcome to DLMS, the cutting-edge LMS app crafted by Danush! Dive into a plethora of courses tailored to fuel your learning journey.
            </p>
          </div>
        </section>

        <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div class="max-w-xl lg:max-w-3xl">
          <SignIn />
          </div>
        </main>
      </div>

     
    </section>
  );
}
