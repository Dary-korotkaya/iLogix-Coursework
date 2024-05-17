import {FC, ReactElement} from "react";
import {Vector14Icon} from "@/theme/components/Background/Vector14Icon";
import {Vector13Icon} from "@/theme/components/Background/Vector13Icon";
import {Vector12Icon} from "@/theme/components/Background/Vector12Icon";
interface PageConfigProps {
    children: ReactElement;
}
const PageConfig: FC<PageConfigProps> = ({ children }) => {
    return (
        <>
            <Vector12Icon style={{ position: 'absolute', left: '-7px', top: '58px', width: '778.7482px', height: '836.4449px', overflow: 'visible', filter: 'blur(113.27716827392578px)' }} />
            <Vector13Icon style={{ position: 'absolute', left: '695px', top: '-476px', width: '1093.7276px', height: '1105.6121px', overflow: 'visible', filter: 'blur(159.25px)' }} />
            <Vector14Icon style={{ position: 'absolute', left: '649px', top: '496px', width: '993.056px', height: '980.2581px', overflow: 'visible', filter: 'blur(99.45841979980469px)' }} />
            {children}
        </>
    )
}
export default PageConfig;
