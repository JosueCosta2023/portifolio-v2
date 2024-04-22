import { UlMenu } from "./styled";



interface MenuProps  {
    items: string[];
}

export const Menu: React.FC<MenuProps> = ({items}) => {
    return(
        <UlMenu>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </UlMenu>
    )
}