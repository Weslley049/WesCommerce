import { ReactNode, forwardRef, useImperativeHandle, useRef, useState } from "react"

import * as S from './styles'
import { Menu } from "@mui/material"

export interface Handler {
	handleOpen: () => void
	handleClose: () => void
	open: boolean
}

export interface MenuInterface {
    icon: ReactNode,
    children: ReactNode,
}

export const VerticalMenu = forwardRef<Handler, MenuInterface>(({icon, children}, ref) => {
    const ancholELRef = useRef<HTMLDivElement  | null>(null);

    const [open, SetOpen] = useState<boolean>(false);

    const handleOpen = () => {
        SetOpen(true)
    }

    const handleClose = () => {
        SetOpen(false)
    }

    useImperativeHandle(ref, () => ({
		handleOpen,
		handleClose,
		open
	}))

    
    return (
        <S.Main>
            <div ref={ancholELRef}>
                {icon}
            </div>
        
            <Menu
                id="basic-menu"
                anchorEl={ancholELRef.current}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {children}
            </Menu>
        </S.Main>
    )
})