"use client";
import { Button } from "@/components/ui";
import { PersonalInfoForm } from ".";
import { useState } from "react";
import { LoadingSpinner } from "@/shared/icons";
import * as yup from "yup";
import { PersonalInfo as PersonalInfoClass } from "./personal-info.form";

const personalInfoSchema = yup.object({
  name: yup.string(),
  email: yup.string(),
  contact: yup.string(),
});

export function PersonalInfo() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmitPersonalInfoForm(data: PersonalInfoClass) {
    //
  }

  return (
    <>
      <PersonalInfoForm
        onSubmit={handleSubmitPersonalInfoForm}
        validationSchema={personalInfoSchema}
        id="personal-info-form"
      />
      <Button
        className="mt-2 w-full"
        type="submit"
        form="personal-info-form"
        disabled={isLoading}>
        {isLoading ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <>Enviar</>
        )}
      </Button>
    </>
  );
}
