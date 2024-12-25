"use client";

import { Link } from "../config/i18n/routing";
import { usePathname } from "../config/i18n/routing";
import { routing } from "../config/i18n/routing";
import {Fragment} from "react";

export default function LocaleSwitcher({currentLocale}: {currentLocale: string}) {
    const path = usePathname();

    return (
        <div className="flex gap-16">
            <div className="flex items-center gap-4">
                {routing.locales.map((locale, i) => {
                    return (
                        <Fragment key={locale}>
                            <Link
                                href={path || "/"}
                                locale={locale}
                                className={"uppercase" +
                                    (locale === currentLocale ? " underline decoration-4 underline-offset-8 text-primary-500"
                                        : ""
                                    )}
                                data-cursor-text={locale.toUpperCase()}
                            >
                                {locale}
                            </Link>
                            {i < routing.locales.length - 1 &&
                                <div className="bg-neutral-300 rounded h-8 w-1"/>
                            }
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}