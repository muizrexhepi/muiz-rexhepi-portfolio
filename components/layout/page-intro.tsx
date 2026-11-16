import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type PageIntroProps = {
  title: string;
  description: string;
  className?: string;
  descriptionClassName?: string;
};

function PageIntro({
  title,
  description,
  className,
  descriptionClassName,
}: PageIntroProps) {
  return (
    <div
      className={cn(
        "grid gap-7 lg:grid-cols-[0.62fr_0.38fr] lg:items-end lg:gap-16",
        className,
      )}
    >
      <div>
        <Heading as="h1" variant="hero" className="max-w-4xl">
          {title}
        </Heading>
      </div>

      <Text
        variant="lead"
        className={cn("max-w-xl lg:pb-1", descriptionClassName)}
      >
        {description}
      </Text>
    </div>
  );
}

export { PageIntro };
