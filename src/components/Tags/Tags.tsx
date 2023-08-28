import { Badge, Stack } from '@chakra-ui/react'
import { FC } from 'react'

interface TagsProps {
  tags: string[]
  onSelect: (event: React.MouseEvent) => void
  selectedTag: string | null
}

const Tags: FC<TagsProps> = ({ tags, onSelect, selectedTag }) => {
  return (
    <Stack direction='row'>
      {tags.map((tag, i) => (
        <Badge
          key={`${tag}_${i}`}
          variant={selectedTag === tag ? 'solid' : 'outline'}
          colorScheme='teal'
          cursor={'pointer'}
        >
          <p onClick={onSelect}>{tag}</p>
        </Badge>
      ))}
    </Stack>
  )
}

export default Tags
