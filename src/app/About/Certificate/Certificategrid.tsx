"use client";

import { certificatesData } from "@/app/About/Certificate/Certificatesdata";
import CertificateCard from "@/app/About/Certificate/Certificatecard";

export default function CertificateGrid() {
  return (
    <section className="w-full bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8 mb-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Achievement
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Certificates {`&`} Awards
          </h2>
        </div>

        {/* gap-y lebih besar agar kartu detail yang melayang ke bawah
            tidak langsung menabrak kartu di baris berikutnya */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
          {certificatesData.map((certificate) => (
            <CertificateCard key={certificate.id} data={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
