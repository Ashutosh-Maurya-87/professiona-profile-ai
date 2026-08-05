"use client";

import {
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageCircle,
} from "lucide-react";

import type { ContactInfo } from "@/types/portfolio";

interface ContactCardProps {
    contact: ContactInfo;
}

export default function ContactCard({
    contact,
}: ContactCardProps) {
    return (
        <div
            className="
        mt-3
        rounded-2xl
        border
        border-zinc-700
        bg-zinc-900
        p-5
      "
        >
            <h3 className="mb-5 text-lg font-semibold text-white">
                Contact Information
            </h3>

            <div className="space-y-4">

                <a
                    href={`mailto:${contact.email}`}
                    className="
            flex
            items-center
            gap-3
            text-zinc-300
            transition
            hover:text-amber-400
          "
                >
                    <Mail size={18} />

                    {contact.email}
                </a>

                <a
                    href={`tel:${contact.phone}`}
                    className="
            flex
            items-center
            gap-3
            text-zinc-300
            transition
            hover:text-amber-400
          "
                >
                    <Phone size={18} />

                    {contact.phone}
                </a>

                <a
                    href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            flex
            items-center
            gap-3
            text-zinc-300
            transition
            hover:text-amber-400
          "
                >
                    <MessageCircle size={18} />

                    WhatsApp
                </a>

                <div
                    className="
            flex
            items-center
            gap-3
            text-zinc-300
          "
                >
                    <MapPin size={18} />

                    {contact.location}
                </div>

                <div
                    className="
            flex
            items-center
            gap-3
            text-zinc-300
          "
                >
                    <Clock size={18} />

                    {contact.timezone}
                </div>

                <div
                    className="
            rounded-lg
            bg-green-500/10
            px-4
            py-3
            text-sm
            text-green-400
          "
                >
                    {contact.availability}
                </div>

            </div>
        </div>
    );
}