/**
 * 베스트앨범
 * https://programmers.co.kr/learn/courses/30/lessons/42579
 *
 * 26.7점짜리 코드
 *  - 어디가 틀린건지 모르겠다..
 * 
 * 점검한 테스트케이스
 * ["classic", "pop", "classic", "classic", "pop"]
 * [650, 600, 150, 650, 2500]
 * [4, 1, 0, 3]
 * 
 * ["classic", "classic", "classic", "classic", "pop"]
 * [100, 100, 100, 100, 1000]
 * [4, 0, 1]
 * 
 * ["classic", "pop", "classic", "pop", "classic", "classic"]
 * [400, 600, 150, 2500, 500, 500]
 * [3, 1, 4, 5]
 * 
 @ddunny
 */
function solution(genres, plays) {
    let streaming = new Map();
    let popular = new Map();

    for (let i = 0; i < genres.length; i++) {
        let stream = streaming.get(genres[i]); // 플레이횟수 저장
        if (stream !== undefined) {
            stream += plays[i];
            streaming.set(genres[i], stream);
        } else {
            streaming.set(genres[i], plays[i]);
        }

        let popular_play = popular.get(genres[i]);

        if (popular_play !== undefined) {
            let last_item = popular_play[popular_play.length - 1];
            if (last_item.play < plays[i]) {
                // 장르 내에서 많이 재생된 노래를 먼저 수록
                // 장르별로 2개씩 출시하므로 popular_play의 길이는 2로 유지
                if (popular_play.length === 1) {
                    popular_play.unshift({
                        index: i,
                        play: plays[i]
                    });
                } else if (popular_play.length === 2) {
                    if (popular_play[0].play < plays[i]) {
                        popular_play.shift();
                        popular_play.unshift({
                            index: i,
                            play: plays[i]
                        });
                    } else {
                        popular_play.pop();
                        popular_play.push({
                            index: i,
                            play: plays[i]
                        });
                    }
                }
            } else if (last_item.play === plays[i] && popular_play.length === 1) {
                // 장르 내에서 재생횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
                popular_play.push({
                    index: i,
                    play: plays[i]
                });
            }
            popular.set(genres[i], popular_play);
        } else {
            let item = [];
            item.push({
                index: i,
                play: plays[i]
            });
            popular.set(genres[i], item);
        }
    }

    const streamingSorted = new Map([...streaming].sort((a, b) => b[1] - a[1])); // 내림차순 정렬
    let streamingCount = 0;
    let result = [];
    for (let item of streamingSorted) {
        let info = popular.get(item[0]);
        for (let m of info) {
            result.push(m.index);
            streamingCount++;
            if (streamingCount === 2) break; // 장르별로 2곡씩 수록되어야 함
        }
        streamingCount = 0;
    }

    return result;
}
