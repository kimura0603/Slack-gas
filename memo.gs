//APIのresponseのメモ

//getMessagesのリプライ
//返信を持つメッセージは、項目thread_tsを返す。
//このthread_tsとchannelIDでリクエストすると、返信一覧が集計可
function getMessagesJson() {
  return [
    {
      client_msg_id: "66208130-05ff-45d1-be16-1d9db746d664",
      type: "message",
      text: "test",
      user: "U029YRSK1A5",
      ts: "1661869132.701699",
      team: "T029SCSB1KN",
      blocks: [[Object]],
      thread_ts: "1661869132.701699",
      reply_count: 5,
      reply_users_count: 1,
      latest_reply: "1661869383.390189",
      reply_users: ["U029YRSK1A5"],
      is_locked: false,
      subscribed: true,
      last_read: "1661869383.390189",
    },
    {
      client_msg_id: "1692539a-f47a-4387-ab20-2e55685c3b81",
      type: "message",
      text: "test5",
      user: "U029YRSK1A5",
      ts: "1661869237.758919",
      team: "T029SCSB1KN",
      blocks: [[Object]],
    },
    {
      client_msg_id: "5df40c71-7ae4-47b4-aa9d-ef7102bb2722",
      type: "message",
      text: "test10",
      user: "U029YRSK1A5",
      ts: "1661871504.263709",
      team: "T029SCSB1KN",
      blocks: [[Object]],
      thread_ts: "1661871504.263709",
      reply_count: 1,
      reply_users_count: 1,
      latest_reply: "1661871509.201229",
      reply_users: ["U029YRSK1A5"],
      is_locked: false,
      subscribed: true,
      last_read: "1661871509.201229",
    },
    {
      client_msg_id: "ebf2bdba-03d3-4632-a3e8-42290f345ca8",
      type: "message",
      text: "test12",
      user: "U029YRSK1A5",
      ts: "1661871512.112029",
      team: "T029SCSB1KN",
      blocks: [[Object]],
    },
  ];
}

//返信一覧。thread_tsに紐づく返信一覧が全て取れる。
function getRepliesJson() {
  return [
    {
      client_msg_id: "ac563eef-b75f-4e01-a902-329cdd4b8673",
      type: "message",
      text: "test1",
      user: "U029YRSK1A5",
      ts: "1661869138.650559",
      team: "T029SCSB1KN",
      blocks: [[Object]],
      thread_ts: "1661869132.701699",
      parent_user_id: "U029YRSK1A5",
    },
    {
      client_msg_id: "e14bf2ad-5bd8-43c6-ab3b-d92e51b85452",
      type: "message",
      text: "test2",
      user: "U029YRSK1A5",
      ts: "1661869140.683549",
      team: "T029SCSB1KN",
      blocks: [[Object]],
      thread_ts: "1661869132.701699",
      parent_user_id: "U029YRSK1A5",
    },
    {
      client_msg_id: "b3222ea1-ddb5-41b4-ad62-5bbc9cf4ea06",
      type: "message",
      text: "test6",
      user: "U029YRSK1A5",
      ts: "1661869242.487789",
      team: "T029SCSB1KN",
      blocks: [[Object]],
      thread_ts: "1661869132.701699",
      parent_user_id: "U029YRSK1A5",
    },
    {
      client_msg_id: "17f750a8-4d3a-43e2-b0af-8c5681e49a0e",
      type: "message",
      text: "test7",
      user: "U029YRSK1A5",
      ts: "1661869248.047409",
      team: "T029SCSB1KN",
      blocks: [[Object]],
      thread_ts: "1661869132.701699",
      parent_user_id: "U029YRSK1A5",
    },
    {
      client_msg_id: "52fe916a-f9f5-4270-b914-464bb3b92ded",
      type: "message",
      text: "test8",
      user: "U029YRSK1A5",
      ts: "1661869383.390189",
      team: "T029SCSB1KN",
      blocks: [[Object]],
      thread_ts: "1661869132.701699",
      parent_user_id: "U029YRSK1A5",
    },
  ];
}
