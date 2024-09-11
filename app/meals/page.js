import classes from "./page.module.css";
import Link from "next/link";

import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant commmunity.",
};

async function Meal() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

function MealsLoading() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Favourite Recipe fav</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoading />}>
          <Meal />
        </Suspense>
      </main>
    </>
  );
}
