import * as React from 'react'
import Timeago from 'timeago.js'

import { Story } from 'src/models/story.model'

import { 
  CommentLink, Description, 
  ExternalLink,
  Host, 
  Item, 
  Title
} from './styles'

import getArticleLink , { HN_ITEM, HN_USER } from 'src/utils/get-artcle-link'
import getSiteHostname from 'src/utils/get-site-hostname'

const timeago = Timeago()
const LINK_REL = 'nofollow noreferrer noopener'

const ListItem: React.SFC<Story> = ({
  url, id, title, by, score, time, kids
}) => {

  const site = getSiteHostname(url) || 'news.ycombinator.com'
  const link = getArticleLink({url, id})
  const commentUrl = `${HN_ITEM}${id}`
  const userUrl = `${HN_USER}${by}`

  return (
    <Item>
      <div>
        <ExternalLink href={link}rel={LINK_REL} target="_blank">
          <Title>
            {title} <Host>({site})</Host>
          </Title>
        </ExternalLink>
        <Description>
          {score} points by{' '}
          <CommentLink href={userUrl} rel={LINK_REL} target="_blank">
            {by}
          </CommentLink>{' '}
          {timeago.format(new Date(time * 1000).toISOString())} {' | '}
          <CommentLink href={commentUrl} rel={LINK_REL} target="_blank">
            {kids.length} Comments
          </CommentLink>
        </Description>
      </div>
      {/* 
       */}
    </Item>
  )
}

export default ListItem