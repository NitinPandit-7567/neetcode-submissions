class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let fleets=0;
        let prev=0;
        //first sort the array based on positions:
        const positionSpeedMap: Map<number,number>=new Map()
        position.forEach((p,i)=>positionSpeedMap.set(p,speed[i]))
        position.sort((a,b)=>{return b-a})
        for(let i=0; i<position.length;i++){
            const s = positionSpeedMap.get(position[i])
            const time = (target-position[i])/s;
            if(time>prev){
              prev = time;
              fleets++;
            }
        }
        return fleets;
    }
}
