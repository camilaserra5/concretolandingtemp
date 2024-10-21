"use client";

import { Button } from "@/components/button";
import FilterDropdown from "@/components/filter-dropdown";
import FilterInput from "@/components/filter-input";
import FilterLabel from "@/components/filter-label";
import { useTranslations } from "next-intl";
import { montserrat, roboto } from "../lib/fonts";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="bg-ui-700 items-center justify-center gap-4 flex flex-col h-screen">
      <p className={`${montserrat.className} text-4xl text-pink-500`}>
        {t("hi")}
      </p>
      <p className={`${roboto.className} text-4xl text-pink-500`}>{t("hi")}</p>
      <FilterLabel label={t("hi")} id={""}></FilterLabel>
      <FilterDropdown
        id={""}
        options={[
          {
            label: "hola",
            value: "hola",
          },
          {
            label: "hola2",
            value: "hola2",
          },
          {
            label: "hola3",
            value: "hola3",
          },
        ]}
        onSelected={() => {}}
        onUnselected={() => {}}
        selected={[
          {
            label: "hola",
            value: "hola",
          },
        ]}
      />
      <Button label="asd" />
      <FilterInput id={""} label="asd" onChange={() => {}} />
    </div>
  );
}
