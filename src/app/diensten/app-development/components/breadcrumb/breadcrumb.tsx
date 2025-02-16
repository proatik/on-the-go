import { SectionHeader } from "../section-header"
import { Route } from "./path"

const Breadcrumb = () => {
  return (
    <div className="animate-in slide-in-from-top duration-500 w-full bg-[#F5F5F5] flex flex-col items-center justify-center py-4 pt-[51px] pb-[35px] md:pt-[122px] md:pb-[70px] ">
      <SectionHeader>
        App Ontwikkeling
      </SectionHeader>
      <Route />
    </div>
  )
}



export default Breadcrumb
