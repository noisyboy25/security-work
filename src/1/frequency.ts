export class FrequencyAnalyser {
  freqTable: string = 'оеаинтсрвлкмдпуяыьгзбчйхжшюцщэфъё';

  constructor(options?: { freqTable?: string }) {
    if (options) {
      this.freqTable = options.freqTable || this.freqTable;
    }
  }

  buildFreqString(data: string): string {
    let freqMap = new Map<string, number>();
    this.freqTable.split('').forEach((ch) => {
      freqMap.set(ch, 0);
    });
    data.split('').forEach((ch) => {
      // if (this.freqList.indexOf(ch) < 0) return;
      return freqMap.set(ch, freqMap.get(ch)! + 1);
    });
    freqMap = new Map<string, number>(
      [...freqMap.entries()].sort((a, b) => b[1] - a[1])
    );
    return Array.from(freqMap.keys()).join('');
  }

  decode(data: string, freqString: string): string {
    console.log(`freqTab: ${this.freqTable}`);
    console.log(`freqStr: ${freqString}`);

    return data
      .split('')
      .map((ch) => {
        if (this.freqTable.indexOf(ch) < 0) return ch;
        // console.log(
        // `${ch} -> ${freqString.charAt(this.freqTable.indexOf(ch))}`
        // );

        return freqString.charAt(this.freqTable.indexOf(ch));
      })
      .join('');
  }
}
