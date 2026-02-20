import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className={cn("flex items-center rounded-md bg-zinc-100 p-2", className)}>
      <Input
        type="text"
        placeholder="Search"
        className="flex-1 border-none bg-transparent text-zinc-500 placeholder:text-zinc-400 focus-visible:ring-0 focus-visible:ring-offset-0"
        {...props}
      />
    </div>
  );
}