import {
  Field,
  FieldGroup,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectAlignItemProps {
  onValueChange: (value: string) => void,
  options: string[],
  category: string
}

export function SelectAlignItem({ onValueChange, options, category }: SelectAlignItemProps) {
  return (
    <FieldGroup className="w-64 max-w-xs">
      <Field>
        <Select defaultValue="todos" onValueChange={onValueChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup >
                <SelectItem value="todos" disabled >Seleccione {category}</SelectItem>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
              
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  )
}
