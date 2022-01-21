export class FrequencyAnalyser {
  freqTable: string = 'оеаинтсрвлкмдпуяыьгзбчйхжшюцщэфъё';

  constructor(options?: { freqTable?: string }) {
    if (options) {
      this.freqTable = options.freqTable || this.freqTable;
    }
  }

  static buildFreqString(data: string): string {
    let freqMap = new Map<string, number>();
    data.split('').forEach((ch) => {
      return freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    });

    freqMap = new Map<string, number>(
      [...freqMap.entries()].sort((a, b) => b[1] - a[1])
    );
    return Array.from(freqMap.keys()).join('');
  }

  decode(data: string, freqString: string): string {
    return data
      .split('')
      .map((ch) => {
        if (this.freqTable.indexOf(ch) < 0) return ch;
        return freqString.charAt(this.freqTable.indexOf(ch));
      })
      .join('');
  }
}
