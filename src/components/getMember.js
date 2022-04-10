export default{}

const memberListURL="https://raw.githubusercontent.com/Tegei/tegei.github.io/main/memberList.csv"

export const getMembers= async (dataLength=5)=>{
    const res = await fetch(memberListURL)
    const membersCsv = await res.text()
    const membersObj=[]
    for(const memberText of membersCsv.split('\n')){
        const text=memberText.split(',')
        if(text.length===dataLength){
            continue
        }
        membersObj.push({
            name:text[0],
            grade:text[1],
            tech:text[2],
            free:text[3],
            imagePath:text[4],
        })
    }
    return membersObj
}