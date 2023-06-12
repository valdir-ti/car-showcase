import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string
    containerStyles?: string
    btnType?: "button" | "submit"
    handleClick?: MouseEventHandler<HTMLButtonElement>
    textStyles?: string
    rightIcon?: string
    isDisabled?: boolean
}

export interface SearchManufactureProps {
    setManufacture: (manufacture: string) => void;
    manufacture: string
}

export interface CustomFilterProps {
    title: string
}

export interface Car {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface CarCardProps {
    car: Car
}
export interface CarDetailsProps {
    car: Car
    isOpen: boolean
    closeModal: () => void
}