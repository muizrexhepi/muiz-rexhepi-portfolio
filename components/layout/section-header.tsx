import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

function SectionHeader({
  title,
  description,
  align = "left",
  className,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Heading as="h2" variant="section">
        {title}
      </Heading>

      {description ? (
        <Text
          variant="body"
          className={cn("mt-5 max-w-2xl", align === "center" && "mx-auto")}
        >
          {description}
        </Text>
      ) : null}
    </div>
  );
}

export { SectionHeader };
