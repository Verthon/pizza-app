import { useDispatch } from "react-redux";

import type { Dispatch } from "../../store/index"

export const useAppDispatch = () => useDispatch<Dispatch>()