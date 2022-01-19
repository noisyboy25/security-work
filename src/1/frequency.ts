export class FrequencyAnalyser {
  freqTable: string[] = 'оеаинтсрвлкмдпуяыьгзбчйхжшюцщэфъё'.split('');

  constructor(options?: { freqTable?: string[] }) {
    if (options) {
      this.freqTable = options.freqTable || this.freqTable;
    }
  }

  buildFreqString(data: string): string {
    let freqTable = new Map<string, number>();
    data.split('').forEach((ch) => {
      if (this.freqTable.indexOf(ch) < 0) return;
      return freqTable.set(ch, (freqTable.get(ch) || 0) + 1);
    });
    freqTable = new Map<string, number>(
      [...freqTable.entries()].sort((a, b) => b[1] - a[1])
    );
    return Array.from(freqTable.keys()).join('');
  }

  decode(data: string, freqString: string): string {
    return data
      .split('')
      .map((ch) => {
        if (freqString.indexOf(ch) < 0) return ch;
        return this.freqTable[freqString.indexOf(ch)];
      })
      .join('');
  }
}
